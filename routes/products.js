const express = require('express');
const db = require('../db/models');
const { Op } = require("sequelize");
const { asyncHandler } = require('../utils');
const { Product, BicycleDetail, ClothingDetail } = db;

const router = express.Router();

router.get(
    "/:id",
    asyncHandler
    (async (req, res) => {
        const id = req.params.id;
        const productInfo = await Product.findByPk(id);
        res.status(201).json({
            productInfo
        });
    }));

router.get(
    "/:type/:id",
    asyncHandler
    (async (req, res) => {
        const type = req.params.type;
        const id = req.params.id;
        let detail = [];
        if (type === 'Bicycles') {
            const bd = await BicycleDetail.findAll(
                { where: {
                    productId_FK: {
                        [Op.eq]: id,
                    }
                }
                });
            //grab size and return
            for (let i = 0; i < bd.length; i++) {
                detail.push(bd[i].size + " cm")
            }

        } else if (type === 'Clothing') {
                const cd = await ClothingDetail.findAll(
                    { where: {
                        productId_FK: {
                            [Op.eq]: id,
                        }
                    }
                    });
            for (let i=0; i < cd.length; i++) {
                detail.push(cd[i].size);
            }
        }

        res.status(201).json(detail);
    }));



    module.exports = router;
