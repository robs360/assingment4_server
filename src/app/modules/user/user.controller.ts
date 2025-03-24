import { RequestHandler } from "express";
import { userServices } from "./user.services";

const createUser:RequestHandler = async (req, res,next) => {
    try {
        const user = req.body;
       
        const result = await userServices.createUserIntoDB(user)
        res.status(200).json({
            success: true,
            message: "User successfully created",
            data: result,
        });
    }
    catch (err) {
       next(err)
    }
}

const getAllUser:RequestHandler=async (req,res,next)=>{
    try{
        const result = await userServices.getAllUserFromDB()
        res.status(200).json({
          success: true,
          message: "get  all users",
          data: result,
        })
    }
    catch(err){
       next(err)
    }
}


const getSingleUser:RequestHandler=async (req,res,next)=>{
    try{
        const id=req.params.id
        const result=await userServices.getSingleUserFormDb(id)
        res.status(200).json({
           success: true,
           message: "User successfully getted",
           data: result,
       });
    }
    catch(err){
      next(err)
    }
}


const updateSingleUser:RequestHandler=async (req,res,next)=>{
    try{
        const id=req.params.id
        const updatedDoc=req.body
        const result=await userServices.updateSingleUserIntoDb(id,updatedDoc)
        res.status(200).json({
           success: true,
           message: "User updated successfully",
           data: result,
       });
    }
    catch(err){
        next(err)
    }
}

const deleteSingleUser:RequestHandler=async (req,res,next)=>{
    try{
        const id=req.params.id
        
        const result=await userServices.deletedSingleUserForDb(id)
        res.status(200).json({
           success: true,
           message: "User deleted successfully",
           data: result,
       });
    }
    catch(err){
      next(err)
    }
}


const blockUser:RequestHandler=async (req,res,next)=>{
    try{
        const userID=req.params.id
        const result=await userServices.blockSingleUsersIntoDb(userID)
        res.status(200).json({
            success: true,
            message: "User blocked successfully",
            data: result,
        });
    }
    catch(err){
        next(err)
    }
}
const activeUser:RequestHandler=async (req,res,next)=>{
    try{
        const userID=req.params.id
        const result=await userServices.activekSingleUsersIntoDb(userID)
        res.status(200).json({
            success: true,
            message: "User actived successfully",
            data: result,
        });
    }
    catch(err){
        next(err)
    }
}

export const userController={
    createUser,getAllUser,
    getSingleUser,updateSingleUser,
    deleteSingleUser,blockUser,activeUser
}