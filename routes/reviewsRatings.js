const express = require('express');
const db = require('../db/models');
const { Op } = require("sequelize");
const { asyncHandler } = require('../utils');
const { ReviewRating, User } = db;

const router = express.Router();

router.get(
    "/reviews/:userId/:productId",
    asyncHandler
    (async (req, res) => {
        const productId_FK = req.params.productId;
        const userId_FK = req.params.userId;
        console.log("Checking for productId_FK: ", productId_FK, " userId_FK: ", userId_FK);
        const found = await ReviewRating.findAll(
            { where: {
                productId_FK: {
                    [Op.eq]: productId_FK,
                },
                userId_FK: {
                    [Op.eq]: userId_FK,

            }
            }});
        console.log("Found:  ", found);
        if (found.length === 0) {
            res.status(201).json({status: 'ok'});
        } else {
            res.status(400).json({status: 'Review for this product has already been submitted by this user.'});
    }}));

router.get(
    "/rating/:id",
    asyncHandler
    (async (req, res) => {
        const id = parseInt(req.params.id);
        console.log(req.params)
        const ratings = await ReviewRating.findAll(
            { where: {
                productId_FK: {
                    [Op.eq]: req.params.id,
                }
            }})
        console.log("Number of ratings: ", ratings.length)
        const nbrRatings = ratings.length;
        let totalRatings = 0;
        let avgRatings = 0;
        console.log("Ratings:  ", ratings);
        for (let i = 0; i < nbrRatings; i++) {
            console.log("ratings[", i, "]:  ", ratings[i].rating);
            totalRatings += ratings[i].rating;
        }
        if (totalRatings > 0) {
            avgRatings = totalRatings/nbrRatings;
        }
        console.log("Total ratings: ", totalRatings);
        console.log("Number ratings:  ", nbrRatings);
        console.log("Average: ", avgRatings);
        res.status(201).json({
            averageRating: Math.round(avgRatings)
          });
    }));

    router.get(
        "/reviews/:id",
        asyncHandler
        (async (req, res) => {
            const id = req.params.id;
            //get user avatar, username, post date, review, rating
            const ratings = await ReviewRating.findAll(
                { where: {
                    productId_FK: {
                        [Op.eq]: id,
                    }
                }})

            let currUser;
            let reviewArr = [];
            for (let i = 0; i < ratings.length; i++) {
                currUser = await User.findByPk(ratings[i].userId_FK);
                let ratingsObj = {
                    avatarURL: currUser.avatarURL,
                    name: currUser.name,
                    postDate: ratings[i].createdAt,
                    rating: ratings[i].rating,
                    review: ratings[i].review,
                }
                reviewArr.push(ratingsObj)
            }
            res.status(201).json({
                reviews: reviewArr
              });
        }));

        router.post(
            "/reviews/:productId",
            asyncHandler
            (async (req, res) => {
                console.log("Received:  ", req.params.productId, " and req: ", req.body);
                const productId_FK = parseInt(req.params.productId);
                const userId_FK = req.body.userId;
                const review = req.body.review;
                const rating = req.body.rating;
                const found = await ReviewRating.findAll(
                    { where: {
                        productId_FK: {
                            [Op.eq]: productId_FK,
                        },
                        userId_FK: {
                            [Op.eq]: userId_FK,

                    }
                    }});
                    console.log("found:  ", found);
                if (!userId_FK || !productId_FK || !rating || !review) {
                    let msg = '';
                    !userId_FK ? msg += ' -userId missing ' : null;
                    !productId_FK? msg += ' -productId missing '  : null;
                    !rating? msg += ' -rating missing' : null;
                    !review? msg += ' -review missing' : null;

                    res.status(400).json(msg);
                } else if (found.length === 0) {
                    // console.log("InventoryId: ", inventoryId_FK, " UserId: ", userId_FK, " Quantity: ", quantity);
                    const reviewObj = await ReviewRating.create({ userId_FK, productId_FK, review, rating });
                    res.status(201).json({status: 'ok'});
                } else {
                    res.status(400).json({status: 'Review for this product has already been submitted by this user.'});
            }}));


    module.exports = router;
