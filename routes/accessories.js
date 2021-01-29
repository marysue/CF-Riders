const express = require('express');
const db = require('../db/models');
const { Op } = require("sequelize");
const { asyncHandler } = require('../utils');
const { Product } = db;

const router = express.Router();
const ACCESSORY_TYPE = 3;

router.get(
    "/accessoriesList",
    asyncHandler
    (async (req, res) => {
        const accessoriesList = await Product.findAll(
                { where: {
                    productType_FK: {
                        [Op.eq]: ACCESSORY_TYPE,
                    }
                },
            });
        res.status(201).json({
            accessoriesList
          });
    }));
    module.exports = router;
