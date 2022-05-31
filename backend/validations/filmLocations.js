const { check } = require('express-validator');
const { handleValidationErrors } = require('../utils/validation');



const title = check('title')
.notEmpty()
.withMessage('cannot be empty');

const description = check('description')
.notEmpty()
.withMessage('cannot be empty')

const imageUrl = check('imageUrl')
.notEmpty()
.withMessage('cannot be empty')

exports.validateCreate = [
    title,
    description,
    imageUrl,
    handleValidationErrors
]

// exports.validateUpdate = [
//     title,
//     description,
//     imageUrl,
//     handleValidationErrors
// ]
