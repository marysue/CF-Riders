const express = require('express');
const db = require('../db/models');
const { Op } = require("sequelize");
const { asyncHandler } = require('../utils');
const { Product } = db;

const router = express.Router();

router.get(
    "/accessoriesList",
    asyncHandler
    (async (req, res) => {
        const accessoriesList = await Product.findAll(
                { where: {
                    productTypeEnum: {
                        [Op.eq]: "Accessories",
                    }
                },
            });
        res.status(201).json({
            accessoriesList
          });
    }));
    module.exports = router;
