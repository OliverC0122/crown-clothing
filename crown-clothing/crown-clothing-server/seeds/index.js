// setting up the mongo instance
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crown-clothing');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const categories = require('./categories');
const Product = require('../models/product');
const Category = require('../models/category');

const seedDB = async () => {
    await Product.deleteMany({});
    await Category.deleteMany({});

    for (let category of  categories){
        const newCategory = new Category({
            title: category.title
        });

        for (let product of category.items) {
            const newProduct = new Product(product);
            await newProduct.save();
            newCategory.products.push(newProduct);
        }
        await newCategory.save();

    }
    console.log('finish seeding the database.');
}

seedDB().then(() => {
    mongoose.connection.close();
});


