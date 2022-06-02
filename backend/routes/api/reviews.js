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
            attributes: []
        }]
    })
}))
