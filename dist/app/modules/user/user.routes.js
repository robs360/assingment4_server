"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post('/create', user_controller_1.userController.createUser);
router.get('/', user_controller_1.userController.getAllUser);
router.get('/:id', user_controller_1.userController.getSingleUser);
router.delete('/:id', user_controller_1.userController.deleteSingleUser);
router.put('/active/:id', user_controller_1.userController.activeUser);
router.put('/block/:id', user_controller_1.userController.blockUser);
router.put('/:id', user_controller_1.userController.updateSingleUser);
exports.userRoutes = router;
