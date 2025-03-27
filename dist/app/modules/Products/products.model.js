"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    book_name: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true
});
exports.productModel = (0, mongoose_1.model)('products', productSchema);
