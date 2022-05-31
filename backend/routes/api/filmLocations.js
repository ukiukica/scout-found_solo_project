const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const db = require('../../db/models');
const { sequelize } = require('../../db/models');
const { Op } = require("sequelize");


router.get('/', asyncHandler(async (req, res) => {
    console.log("ENTERED GET HOME ROUTE")
    const filmLocations = await db.FilmLocation.findAll();
    console.log(filmLocations)
    return res.json(filmLocations);
}))

module.exports = router;
