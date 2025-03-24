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
exports.userController = void 0;
const user_services_1 = require("./user.services");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const result = yield user_services_1.userServices.createUserIntoDB(user);
        res.status(200).json({
            success: true,
            message: "User successfully created",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_services_1.userServices.getAllUserFromDB();
        res.status(200).json({
            success: true,
            message: "get  all users",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getSingleUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield user_services_1.userServices.getSingleUserFormDb(id);
        res.status(200).json({
            success: true,
            message: "User successfully getted",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const updateSingleUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedDoc = req.body;
        const result = yield user_services_1.userServices.updateSingleUserIntoDb(id, updatedDoc);
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const deleteSingleUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield user_services_1.userServices.deletedSingleUserForDb(id);
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const blockUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userID = req.params.id;
        const result = yield user_services_1.userServices.blockSingleUsersIntoDb(userID);
        res.status(200).json({
            success: true,
            message: "User blocked successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const activeUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userID = req.params.id;
        const result = yield user_services_1.userServices.activekSingleUsersIntoDb(userID);
        res.status(200).json({
            success: true,
            message: "User actived successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.userController = {
    createUser, getAllUser,
    getSingleUser, updateSingleUser,
    deleteSingleUser, blockUser, activeUser
};
