import { UserModel } from "../user/user.model";
import { TAuth } from "./auth.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type TChangePass = {
    email: string,
    old_password: string
    new_password: string,
}
const loginServices = async (payload: TAuth) => {
    const isExist = await UserModel.findOne({ email: payload.email })
    if (!isExist) {
        throw new Error("inviled user email and password");
    }
    if (isExist.isDeleted) {
        throw new Error("inviled user email and password");
    }
    const hasPassword = await bcrypt.compare(
        payload.password,
        isExist.password
    );
    if (!hasPassword) {
        throw new Error("inviled user email and password");
    }

    const accessToken = jwt.sign(
        { email: isExist.email, role: isExist.role },
        process.env.JWT_SECRICT as string,
        {
            expiresIn: "7d",
        }
    );

    return { accessToken }
}

const changePasswordServices = async (payload: TChangePass) => {
    const authentication = await UserModel.findOne({ email: payload.email });

    if (!authentication) {
        throw new Error("Invalid user email and password");
    }
 
    const isPasswordMatch = await bcrypt.compare(
        payload.old_password, 
        authentication.password
    );

    if (!isPasswordMatch) {
        throw new Error("Invalid user email and password");
    }
  
    const hashedNewPassword = await bcrypt.hash(payload.new_password, 10);
    authentication.password = hashedNewPassword;
  
    await authentication.save();
    return { success: true, message: "Password changed successfully" };
};

export const authServices = {
    loginServices,changePasswordServices
}