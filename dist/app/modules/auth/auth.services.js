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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServices = void 0;
const user_model_1 = require("../user/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginServices = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield user_model_1.UserModel.findOne({ email: payload.email });
    if (!isExist) {
        throw new Error("inviled user email and password");
    }
    if (isExist.isDeleted) {
        throw new Error("inviled user email and password");
    }
    const hasPassword = yield bcrypt_1.default.compare(payload.password, isExist.password);
    if (!hasPassword) {
        throw new Error("inviled user email and password");
    }
    const accessToken = jsonwebtoken_1.default.sign({ email: isExist.email, role: isExist.role }, process.env.JWT_SECRICT, {
        expiresIn: "7d",
    });
    return { accessToken };
});
const changePasswordServices = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const authentication = yield user_model_1.UserModel.findOne({ email: payload.email });
    if (!authentication) {
        throw new Error("Invalid user email and password");
    }
    const isPasswordMatch = yield bcrypt_1.default.compare(payload.old_password, authentication.password);
    if (!isPasswordMatch) {
        throw new Error("Invalid user email and password");
    }
    const hashedNewPassword = yield bcrypt_1.default.hash(payload.new_password, 10);
    authentication.password = hashedNewPassword;
    yield authentication.save();
    return { success: true, message: "Password changed successfully" };
});
exports.authServices = {
    loginServices, changePasswordServices
};
