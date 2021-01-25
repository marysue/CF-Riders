const express = require('express');
const db = require('../db/models');
const { Op } = require("sequelize");
const { asyncHandler } = require('../utils');
const { ReviewRating, User } = db;

const router = express.Router();

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
    module.exports = router;
