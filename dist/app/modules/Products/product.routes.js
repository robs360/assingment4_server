"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const auth_1 = require("../../middlewares/auth");
const router = express_1.default.Router();
router.get('/', (0, auth_1.auth)(), product_controller_1.productController.getAllProducts);
router.post('/create', product_controller_1.productController.createProduct);
router.put('/:id', product_controller_1.productController.updateSingleProduct);
router.delete('/:id', product_controller_1.productController.deleteSingleProduct);
router.get('/:id', product_controller_1.productController.getSingleProduct);
exports.productRouter = router;
