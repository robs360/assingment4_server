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
exports.productController = void 0;
const product_services_1 = require("./product.services");
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const result = yield product_services_1.productServices.createProductIntoDB(productData);
        res.status(200).json({
            success: true,
            message: "Product successfully created",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const updateSingleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedDoc = req.body;
        const result = yield product_services_1.productServices.updateProductIntoDB(id, updatedDoc);
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const deleteSingleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield product_services_1.productServices.deleteProductFromDB(id);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_services_1.productServices.getAllProductForDb(req.query);
        res.status(200).json({
            success: true,
            message: "Get  all products",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getSingleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield product_services_1.productServices.getSingleProductForDb(id);
        res.status(200).json({
            success: true,
            message: "Product successfully getted",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.productController = {
    createProduct, updateSingleProduct,
    deleteSingleProduct, getSingleProduct,
    getAllProducts
};
