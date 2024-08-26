const express = require('express');
const router = express.Router();

const {
    getCategories,
    getProductsByCategory
} = require('../controllers/categories');

router.get('/',getCategories);

router.get('/:category',getProductsByCategory);




module.exports = router;