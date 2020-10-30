const express = require('express');
const db = require('../db/models');
const { asyncHandler } = require('../utils');
const { Product } = db;

const router = express.Router();

router.get(
    "/bicyclesList",
    asyncHandler
    (async (req, res) => {
        const bicyclesList = await Product.findAll();
        res.status(201).json({
            bicyclesList
          });
    }));
    module.exports = router;
