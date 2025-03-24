import express from "express";
import { productRouter } from "../modules/Products/product.routes";
import { userRoutes } from "../modules/user/user.routes";
import { authRouter } from "../modules/auth/auth.routes";

const router = express.Router();

const modulesRouter=[
    { path:'/products', route:productRouter },   
    { path:'/users', route:userRoutes },   
    { path:'/auth', route:authRouter },   
]
modulesRouter.forEach((route) => router.use(route.path, route.route));
export default router;