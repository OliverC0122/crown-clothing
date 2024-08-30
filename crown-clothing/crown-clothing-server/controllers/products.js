const Product = require('../models/product');
const Category = require('../models/category');

module.exports.createProduct = async (req, res,next) => {
    const {title, ...product} = req.body;
    const category = await Category.findOne({ title : req.body.title });
    const newProduct = new Product(product);
    category.products.push(newProduct);
    await newProduct.save();
    await category.save();
    res.json(newProduct);
};

module.exports.getProductById = async (req, res,next) => {

    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
}

module.exports.deleteProduct = async (req, res,next) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted' });

};

module.exports.updateProduct = async (req, res,next) => {
    const { id } = req.params;
    const product = await  Product.findByIdAndUpdate(id, { ...req.body });
    res.json(product);
};