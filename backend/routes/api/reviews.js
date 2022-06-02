const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const db = require('../../db/models');
const { sequelize } = require('../../db/models');
const { Op } = require("sequelize");


router.get('/', asyncHandler(async (req, res) => {

    const reviews = await db.Review.findAll({
        include: [{
            model: db.User,
            attributes: ['username']
        }],
        // where: {
        //     filmLocationId
        // },
        order:[['createdAt', 'DESC']]
    })
    console.log(reviews)
    return res.json(reviews)

}))

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const {content, userId, filmLocationId} = req.body;
        const review = await db.Review.create({content, userId, filmLocationId})
        return res.json(review)
    })
    )

router.put(
    '/:reviewId',
    asyncHandler(async (req, res) => {
        const {content, userId, filmLocationId} = req.body;
        const review = await db.Review.findByPk(parseInt(req.params.reviewId, 10))
        review.update({content, userId, filmLocationId})
        return res.json(review)
    })
)

router.delete(
    '/:reviewId',
    asyncHandler(async (req, res) => {
        const review = await db.Review.findByPk(parseInt(req.params.reviewId, 10))
        await review.destroy()
        return res.json('review deleted')
    })
)

module.exports = router;
