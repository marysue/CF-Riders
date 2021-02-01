const express = require('express');
const db = require('../db/models');
const { Op } = require("sequelize");
const { asyncHandler } = require('../utils');
const { Inventory } = db;

const router = express.Router();
const BICYCLE_TYPE = 1
const CLOTHING_TYPE = 2
const ACCESSORY_TYPE = 3;

router.get(
    "/:id",
    asyncHandler
    (async (req, res) => {
        const productList = await Inventory.findAll(
            { where: {
                productId_FK: {
                    [Op.eq]: req.params.id,
                },
                quantity: {
                    [Op.ne]: 0,
                }
            },
           include: ["Frame", "Size", "Color", "Gender"]
            });
            const productInfo = [];
            //console.log("Product type:  ", productList[0].productType_FK) //=== BICYCLE_TYPE)
            if (productList[0] && productList[0].productType_FK === BICYCLE_TYPE) {
                for (let i = 0; i < productList.length; i++) {
                    productInfo.push({
                        inventoryId: productList[i].id,
                        size: productList[i].Size.size,
                        color: productList[i].Color.color,
                        frame: productList[i].Frame.type,
                        gender: productList[i].Gender.gender,
                        quantity:  productList[i].quantity,
                    })
                }
            } else if (productList[0] && productList[0].productType_FK === CLOTHING_TYPE) {
                for (let i = 0; i < productList.length; i++) {
                    productInfo.push({inventoryId: productList[i].id,
                        size: productList[i].Size.size,
                        gender: productList[i].Gender.gender,
                        quantity:  productList[i].quantity,
                    })
                }
            } else if (productList[0] && productList[0].productType_FK === ACCESSORY_TYPE) {
                //No size, gender or color on accessories - just return quantity
                for (let i=0; i < productList.length; i++) {
                    productInfo.push( { inventoryId: productList[i].id,
                        quantity: productList[i].quantity})
                    }
            }
        res.status(201).json({
            productInfo
          });
    }));


    module.exports = router;
