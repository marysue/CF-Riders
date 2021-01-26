const express = require('express');
const db = require('../db/models');
const { Op } = require("sequelize");
const { asyncHandler } = require('../utils');
const { Product, BicycleDetail } = db;

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



    module.exports = router;
