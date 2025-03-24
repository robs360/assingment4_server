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
exports.UserModel = exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isDeleted: { type: Boolean, required: false, default: false },
    passwordChengeAt: {
        type: Date,
        required: false,
        default: new Date(),
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        require: false,
        default: "user",
    },
    status: {
        type: String,
        enum: ["actived", "deactivate"],
        require: false,
        default: "actived",
    },
}, { timestamps: true });
exports.userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const password = this.password;
        if (!password) {
            throw new Error("password is requred");
        }
        const hasPassword = yield bcrypt_1.default.hash(password, 10);
        if (!hasPassword) {
            throw new Error(" bcrypt solt generate problem ");
        }
        this.password = hasPassword;
        next();
    });
});
exports.UserModel = (0, mongoose_1.model)("users", exports.userSchema);
