import { NextFunction } from "express"
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../modules/user/user.model";
export const auth = (...requireRole:string[]) => {
    return async (req: any, res: any, next: NextFunction) => {
        try {

            const token = req.headers.authorization
            if (!token) {
                throw new Error("you are unauthorization");
            }
            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRICT as string
            ) as JwtPayload;

            const {email,role}=decoded;

            const user = await UserModel.findOne({ email, role });

            if (!user) {
              throw new Error("you are unauthorization");
            }
            if (user.isDeleted) {
              throw new Error("you are unauthorization");
            }
            
            if (requireRole && !requireRole.includes(role)) {
                throw new Error("you are unauthorization");
              }
            req.user=decoded as JwtPayload

            next()
        }
        catch (err) {
            next(err)
        }
    }
} 