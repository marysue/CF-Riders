const express = require('express');
const db = require('../db/models');
const { Op } = require("sequelize");
const { asyncHandler } = require('../utils');
const { Cart, Order, Color, Frame, Gender, Size, ProductType, Product, Inventory } = db;

const router = express.Router();
const BICYCLE_TYPE = 1
const CLOTHING_TYPE = 2
const ACCESSORY_TYPE = 3;


router.get(
    "/:userId",
    asyncHandler
    (async (req, res) => {
        const cartList = await Cart.findAll(
            { where: {
                userId_FK: {
                    [Op.eq]: req.params.userId,
                },
            },
           include: ["Inventory", "User"]
            });

        const formattedCartList = await formatCartList(cartList);
        //console.log("formattedCartList: ", formattedCartList);
        res.status(201).json({
            formattedCartList
          });
    }));

    router.get(
        "/cartItems/:userId",
        asyncHandler
        (async (req, res) => {
            const cartList = await Cart.findAll(
                { where: {
                    userId_FK: {
                        [Op.eq]: req.params.userId,
                    },
                },
                });


            res.status(201).json({
                cartItems: cartList.length
              });
        }));

router.post(
    "/",
    asyncHandler
    (async (req, res) => {
        const inventoryId_FK = req.body.inventoryId;
        const userId_FK = req.body.userId;
        const quantity = req.body.quantity;
        console.log("quantity:  ", quantity);
        console.log("InventoryId: ", inventoryId_FK, " UserId: ", userId_FK, " Quantity: ", quantity);

        const inventory = await Inventory.findByPk(inventoryId_FK);
        const oldQty = inventory.quantity;
        const newQty = oldQty - quantity;
        if (newQty < 0) {
            res.status(400).json('Not enough inventory to fill request.');
        } else {
            const updateInventory = await Inventory.update(
                {quantity: newQty},
                {returning: true, where: {id: inventoryId_FK}}
            );
            const cart = await Cart.create({ userId_FK, inventoryId_FK, quantity });
            res.status(201).json({status: 'ok'});
        }
    }));


    module.exports = router;
