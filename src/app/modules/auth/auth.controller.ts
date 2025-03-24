import { RequestHandler } from "express";
import { authServices } from "./auth.services";

const loginController:RequestHandler=async (req,res,next)=>{
   try{
        const userData=req.body
        const result=await authServices.loginServices(userData)
        res.status(200).json({
            success: true,
            message: "Login  Successfully",
            data: result,
          })
   }
   catch(err){
        next(err)
   }
}

const changePassController:RequestHandler=async (req,res,next)=>{
   try{
      const userData=req.body
      const result=await authServices.changePasswordServices(userData)
      res.status(200).json({
         success: true,
         message: "Password Chnaged Successfully",
         data: result,
       })
   }
   catch(err){
      next(err)
   }
}
export const authController={
   loginController, changePassController
}