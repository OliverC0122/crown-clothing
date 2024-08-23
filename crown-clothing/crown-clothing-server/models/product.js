const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: Number,
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
});

module.exports = mongoose.model('Product',productSchema);