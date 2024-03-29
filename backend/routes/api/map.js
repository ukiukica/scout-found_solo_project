const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

router.get('/key', asyncHandler(async (req, res) => {
    const key = process.env.MAPS_API_KEY;
    return res.json({'googleMapsAPIKey': key})
}))

module.exports = router;
