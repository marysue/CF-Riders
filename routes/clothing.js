const express = require('express');
const db = require('../db/models');
const { Op } = require("sequelize");
const { asyncHandler } = require('../utils');
const { Product, ClothingDetail } = db;

const router = express.Router();

router.get(
    "/clothingList",
    asyncHandler
    (async (req, res) => {
        const clothingList = await Product.findAll(
            { where: {
                productTypeEnum: {
                    [Op.eq]: "Clothing",
                }
            },
            include: ClothingDetail
            });
        res.status(201).json({
            clothingList
          });
    }));
    module.exports = router;
