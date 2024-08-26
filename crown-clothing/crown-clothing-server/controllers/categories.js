const Category = require('../models/category');
const Product = require('../models/product'); // Import the Product model
module.exports.getCategories = async (req, res) => {
    try {
        const populatedCategories = await Category.find({}).populate('products');
        res.status(200).json(populatedCategories);
    } catch (error) {
        console.error('Error populating categories:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports.getProductsByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const products = await Category.findOne({ title: category }).populate('products');
        res.status(200).json(products);
    }
    catch (error) {
        console.error('Error populating products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}