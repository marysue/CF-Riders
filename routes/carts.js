const express = require("express");
const db = require("../db/models");
const { Op } = require("sequelize");
const { asyncHandler } = require("../utils");
const {
  Cart,
  Color,
  Frame,
  Gender,
  Size,
  ProductType,
  Product,
  Inventory,
} = db;

const router = express.Router();
const BICYCLE_TYPE = 1;
const CLOTHING_TYPE = 2;
const ACCESSORY_TYPE = 3;

const setColors = async () => {
  const colors = await Color.findAll();
  let cobj = {};
  for (let i = 0; i < colors.length; i++) {
    cobj = { ...cobj, [i]: colors[i].color };
  }
  return cobj;
};

const setGenders = async () => {
  const genders = await Gender.findAll();
  let obj = {};
  for (let i = 0; i < genders.length; i++) {
    obj = { ...obj, [i]: genders[i].gender };
  }
  return obj;
};

const setSizes = async () => {
  const sizes = await Size.findAll();
  let obj = {};
  for (let i = 0; i < sizes.length; i++) {
    obj = { ...obj, [i]: sizes[i].size };
  }
  return obj;
};

const setFrames = async () => {
  const frames = await Frame.findAll();
  let obj = {};
  for (let i = 0; i < frames.length; i++) {
    //console.log("FRAMES[I]:  ", frames[i]);
    obj = { ...obj, [i]: frames[i].type };
  }
  //console.log("FRAME Object: ", obj)
  return obj;
};

const setProductType = async () => {
  const productTypes = await ProductType.findAll();
  let obj = {};
  for (let i = 0; i < productTypes.length; i++) {
    obj = { ...obj, [i]: productTypes[i].type };
  }
  return obj;
};

const formatCartList = async (cartList) => {
  const colorsObj = await setColors();
  const sizesObj = await setSizes();
  const framesObj = await setFrames();

  const productTypesObj = await setProductType();
  const gendersObj = await setGenders();

  fcl = [];

  for (let i = 0; i < cartList.length; i++) {
    const product = await Product.findByPk(cartList[i].Inventory.productId_FK);
    // console.log("Inventory.color_FK: ", cartList[i].Inventory.color_FK)
    // console.log("colorsObj: ", colorsObj);
    // console.log("colorsObj[", cartList[i].Inventory.color_FK, "]: ", colorsObj[cartList[i].Inventory.color_FK]);
    const obj = {
      quantity: cartList[i].quantity,
      userName: cartList[i].User.name,
      userId: cartList[i].userId_FK,
      email: cartList[i].User.emailAddress,
      avatarUrl: cartList[i].User.avatarURL,
      color: colorsObj[cartList[i].Inventory.color_FK],
      gender: gendersObj[cartList[i].Inventory.gender_FK],
      frame: framesObj[cartList[i].Inventory.frameId_FK],
      size: sizesObj[cartList[i].Inventory.size_FK],
      productType: productTypesObj[product.productType_FK],
      name: product.name,
      price: product.price,
      photoUrl: product.photoURL,
      inventoryId: cartList[i].inventoryId_FK,
      cartId: cartList[i].id
    };

    fcl.push(obj);
  }
  //console.log("fcl:  ", fcl);
  return fcl;
};

//add an item to the user's cart
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const inventoryId_FK = req.body.inventoryId;
    const userId_FK = req.body.userId;
    const quantity = req.body.quantity;
    //console.log("InventoryId: ", inventoryId_FK, " UserId: ", userId_FK, " Quantity: ", quantity);
    const cart = await Cart.create({ userId_FK, inventoryId_FK, quantity });
    //console.log("cart created: ", cart);

    const inventory = await Inventory.findByPk(inventoryId_FK);
    //console.log("Inventory.quantity:  ", inventory.quantity);
    inventory.quantity -= cart.quantity;
    await inventory.save({ fields: ["quantity"] });
    const inv = await Inventory.findByPk(inventoryId_FK);

    //Now prepare to return updated values;
    const cartItems = await Cart.findAll({
      where: {
        userId_FK: {
          [Op.eq]: userId_FK,
        },
      },
    });

    res
      .status(201)
      .json({ inventoryQty: inv.quantity, cartItems: cartItems.length });
  })
);

router.post(
  "/removeCartItem/:cartId",
  asyncHandler(async (req, res) => {
    console.log("Hit removeItem/:cartId");
      const userId = req.body.userId;
      const cartId = req.params.cartId;
      console.log("UserId:  ", userId, " cartId: ", cartId);
        const deleteItem = await Cart.findByPk(cartId,
            {
              include: Inventory
            });
        if (deleteItem) {
            console.log("Inventory original quantity: ", deleteItem.Inventory.quantity);
            deleteItem.Inventory.quantity += deleteItem.quantity;
            await deleteItem.Inventory.save({ fields: ["quantity"] });
            const inv = await Inventory.findByPk(deleteItem.inventoryId_FK);
            console.log("updated inventory quantity: ", inv.quantity);
            await deleteItem.destroy();

            //Now return the refreshed cart list:
            const cl = await Cart.findAll(
              { where: {
                userId_FK: {
                  [Op.eq]: userId,
                },
              },
              include: ["Inventory", "User"]
            });
            const cartList = await formatCartList(cl);
            res.status(201).json(cartList);
        } else {
            res.status(404).json({ error: "Item not found in cart."})
        }
  })
);

router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const cl = await Cart.findAll({
      where: {
        userId_FK: {
          [Op.eq]: req.params.userId,
        },
      },
      include: ["Inventory", "User"],
    });

    const cartList = await formatCartList(cl);
    //console.log("formattedCartList: ", formattedCartList);
    res.status(201).json({
      cartList,
    });
  })
);

router.get(
  "/cartItemCount/:userId",
  asyncHandler(async (req, res) => {
    const cartList = await Cart.findAll({
      where: {
        userId_FK: {
          [Op.eq]: req.params.userId,
        },
      },
    });

    res.status(201).json({
      cartItems: cartList.length,
    });
  })
);

module.exports = router;
