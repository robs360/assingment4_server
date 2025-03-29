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
exports.userServices = void 0;
const user_model_1 = require("./user.model");
const createUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield user_model_1.UserModel.findOne({ email: payload.email });
    if (isUserExist) {
        throw new Error("this user alredy exist ");
    }
    const result = yield user_model_1.UserModel.create(payload);
    return result;
});
const updateSingleUserIntoDb = (userId, paylood) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.findByIdAndUpdate(userId, paylood, {
        new: true,
        runValidators: true,
    });
    return result;
});
const getAllUserFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.find({});
    return result;
});
const getSingleUserFormDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.findById(userId);
    return result;
});
const deletedSingleUserForDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.findByIdAndDelete(userId, { new: true });
    return result;
});
const blockSingleUsersIntoDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.updateOne({ _id: userId }, {
        $set: { status: "deactivate" },
    }).select("-password");
    return result;
});
const activekSingleUsersIntoDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.updateOne({ _id: userId }, {
        $set: { status: "actived" },
    }).select("-password");
    return result;
});
exports.userServices = {
    createUserIntoDB, getAllUserFromDB,
    getSingleUserFormDb, updateSingleUserIntoDb,
    deletedSingleUserForDb, blockSingleUsersIntoDb,
    activekSingleUsersIntoDb
};
