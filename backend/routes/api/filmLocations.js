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
    // filmLocationsValidations.validateCreate,
    asyncHandler(async (req, res) => {
        const {title, description, imageUrl, address, userId} = req.body;
        const filmLocation = await db.FilmLocation.create({title, description, imageUrl, address, userId})
        // const id = await db.FilmLocation.create(req.body);
        // return res.redirect(`${req.baseUrl}/${id}`)
        return res.json(filmLocation)
    })
)

router.put(
    '/:filmLocationId',
    asyncHandler(async (req, res) => {
        const {title, description, imageUrl, address} = req.body;
        const filmLocation = await db.FilmLocation.findByPk(parseInt(req.params.filmLocationId, 10))
        filmLocation.update({title, description, imageUrl, address})
        return res.json(filmLocation)
    })
)

router.delete(
    '/:filmLocationId',
    asyncHandler(async (req, res) => {
        const filmLocation = await db.FilmLocation.findByPk(parseInt(req.params.filmLocationId, 10))
        await filmLocation.destroy()
        return res.json("location deleted")
    })
)

module.exports = router;
