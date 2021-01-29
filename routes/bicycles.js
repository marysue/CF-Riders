const express = require('express');
const db = require('../db/models');
const { Op } = require("sequelize");
const { asyncHandler } = require('../utils');
const { Product, BicycleDetail } = db;

const router = express.Router();
const BICYCLE_TYPE = 1

router.get(
    "/bicyclesList",
    asyncHandler
    (async (req, res) => {
        const bicyclesList = await Product.findAll(
            { where: {
                productType_FK: {
                    [Op.eq]: BICYCLE_TYPE,
                }
            },
            include: BicycleDetail
            });
        res.status(201).json({
            bicyclesList
          });
    }));


    module.exports = router;
