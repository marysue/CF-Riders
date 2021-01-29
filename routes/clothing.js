const express = require('express');
const db = require('../db/models');
const { Op } = require("sequelize");
const { asyncHandler } = require('../utils');
const { Product, ClothingDetail } = db;

const router = express.Router();
const CLOTHING_TYPE = 2
router.get(
    "/clothingList",
    asyncHandler
    (async (req, res) => {
        const clothingList = await Product.findAll(
            { where: {
                productType_FK: {
                    [Op.eq]: CLOTHING_TYPE,
                }
            },
            include: ClothingDetail
            });
        res.status(201).json({
            clothingList
          });
    }));
    module.exports = router;
