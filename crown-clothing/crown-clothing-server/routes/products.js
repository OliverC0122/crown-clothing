const express = require('express');
const router = express.Router();
const { createProduct,
        getProductById,
        deleteProduct,
        updateProduct
 } = require('../controllers/products');

module.exports = router;

router.get('/:id', getProductById); // Get a product by ID

router.post('/new', createProduct); // Create a new product

router.delete('/:id', deleteProduct); // Delete a product by ID

router.put('/:id', updateProduct); // Update a product by ID