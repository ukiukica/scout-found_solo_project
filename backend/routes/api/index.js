const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const filmLocationsRouter = require('./filmLocations.js')
const reviewsRouter = require('./reviews.js')

const { csrfProtection } = require('../../utils/csrf');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const db = require('../../db/models');
const { sequelize } = require('../../db/models');
const { Op } = require("sequelize");


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/filmLocations', filmLocationsRouter)

router.use('/reviews', reviewsRouter)



module.exports = router;
