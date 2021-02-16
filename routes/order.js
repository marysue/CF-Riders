const express = require("express");
const db = require("../db/models");
const { Op } = require("sequelize");
const { asyncHandler } = require("../utils");
const {
  Cart,
  Order,
  OrderProduct,
  Color,
  Frame,
  Gender,
  Size,
  ProductType,
  Product,
  Inventory,
} = db;
const env = process.env.NODE_ENV || "development";
const config = require("../config/database.js")[env];

const router = express.Router();
const BICYCLE_TYPE = 1;
const CLOTHING_TYPE = 2;
const ACCESSORY_TYPE = 3;

const formatCartList = async (cartList) => {
  fcl = [];

  for (let i = 0; i < cartList.length; i++) {
    const obj = {
      quantity: cartList[i].quantity,
      userId: cartList[i].userId_FK,
      inventoryId: cartList[i].inventoryId_FK,
      cartId: cartList[i].id,
    };
    fcl.push(obj);
  }
  return fcl;
};

router.post(
  "/orderCart/:userId",
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const cl = await Cart.findAll({
      where: {
        userId_FK: {
          [Op.eq]: userId,
        },
      },
      include: Inventory,
    });
    //cartList already adjusts inventory.
    //just delete cartList items.
    let cartListIds = [];
    const userId_FK = parseInt(userId);
    const quantity = 1;
    for (let i = 0; i < cl.length; i++) {
      const productId_FK = cl[i].Inventory.productId_FK;
      const order = await Order.create({ userId_FK, quantity });
      const orderId_FK = order.id;
      const orderProduct = await OrderProduct.create({orderId_FK, productId_FK});
      cartListIds.push(cl[i].id);
    }
    await Cart.destroy({
        where: {
            id: cartListIds
        }
    })
    res.status(201).json({ status: "ok" });
  })
);

router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const cartList = await Cart.findAll({
      where: {
        userId_FK: {
          [Op.eq]: req.params.userId,
        },
      },
      include: ["Inventory", "User"],
    });

    const formattedCartList = await formatCartList(cartList);
    res.status(201).json({
      formattedCartList,
    });
  })
);

router.get(
  "/cartItems/:userId",
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

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const inventoryId_FK = req.body.inventoryId;
    const userId_FK = req.body.userId;
    const quantity = req.body.quantity;
    
    const inventory = await Inventory.findByPk(inventoryId_FK);
    const oldQty = inventory.quantity;
    const newQty = oldQty - quantity;
    if (newQty < 0) {
      res.status(400).json("Not enough inventory to fill request.");
    } else {
      const updateInventory = await Inventory.update(
        { quantity: newQty },
        { returning: true, where: { id: inventoryId_FK } }
      );
      const cart = await Cart.create({ userId_FK, inventoryId_FK, quantity });
      res.status(201).json({ status: "ok" });
    }
  })
);

module.exports = router;
