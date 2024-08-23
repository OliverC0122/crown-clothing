const Category = require('../models/category');
const Product = require('../models/product'); // Import the Product model
module.exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        console.log('Categories before population:', categories);
        
        const populatedCategories = await Category.find({}).populate('products');
        console.log('Categories after population:', populatedCategories);
        
        res.status(200).json(populatedCategories);
    } catch (error) {
        console.error('Error populating categories:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};