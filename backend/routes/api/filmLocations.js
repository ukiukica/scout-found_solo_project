const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const db = require('../../db/models');
const { sequelize } = require('../../db/models');
const { Op } = require("sequelize");

const filmLocationsValidations = require('../../validations/filmLocations')



router.get('/', asyncHandler(async (req, res) => {
    console.log("ENTERED GET HOME ROUTE")
    const filmLocations = await db.FilmLocation.findAll();
    console.log(filmLocations)
    return res.json(filmLocations);
}))

router.post(
    '/',
    filmLocationsValidations.validateCreate,
    asyncHandler(async (req, res) => {
        const id = await db.FilmLocation.create(req.body);
        return res.redirect(`${req.baseUrl}/${id}`)
    })
)

module.exports = router;
