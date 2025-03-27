"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const products_model_1 = require("./products.model");
const mongodb_1 = require("mongodb");
const createProductIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.productModel.create(payload);
    return result;
});
const updateProductIntoDB = (id, updatedDoc) => __awaiter(void 0, void 0, void 0, function* () {
    const option = { new: true };
    const result = yield products_model_1.productModel.findByIdAndUpdate(id, updatedDoc, option);
    return result;
});
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: new mongodb_1.ObjectId(id) };
    const result = yield products_model_1.productModel.deleteOne(query);
    return result;
});
const getAllProductForDb = (query) => __awaiter(void 0, void 0, void 0, function* () {
    let search = "";
    if (query) {
        search = query.search;
    }
    const filter = search
        ? {
            $or: [
                { category: { $regex: search, $options: "i" } },
                { title: { $regex: search, $options: "i" } },
                { author: { $regex: search, $options: "i" } },
            ],
        }
        : {};
    const result = yield products_model_1.productModel.find(filter);
    return result;
});
const getSingleProductForDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.productModel.findById(id);
    if (!result) {
        throw new Error("Data not found");
    }
    return result;
});
exports.productServices = {
    createProductIntoDB, updateProductIntoDB,
    deleteProductFromDB, getAllProductForDb,
    getSingleProductForDb
};
