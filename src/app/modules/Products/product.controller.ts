import { RequestHandler } from "express";
import { productServices } from "./product.services";

const createProduct: RequestHandler = async (req, res,next) => {
    try {
        const productData = req.body
        const result = await productServices.createProductIntoDB(productData)
        res.status(200).json({
            success: true,
            message: "Product successfully created",
            data: result,
        });
    }
    catch (err) {
        next(err)
    }
}

const updateSingleProduct:RequestHandler=async (req,res,next)=>{
    try{
        const id=req.params.id
        const updatedDoc=req.body
        const result=await productServices.updateProductIntoDB(id,updatedDoc)
        res.status(200).json({
           success: true,
           message: "Product updated successfully",
           data: result,
       });
    }
    catch(err){
        next(err)
    }
}

const deleteSingleProduct:RequestHandler=async (req,res,next)=>{
    try{
        const id=req.params.id
        
        const result=await productServices.deleteProductFromDB(id)
        res.status(200).json({
           success: true,
           message: "Product deleted successfully",
           data: result,
       });
    }
    catch(err){
      next(err)
    }
}

const getAllProducts:RequestHandler=async (req:any,res,next)=>{
    try{
        const result = await productServices.getAllProductForDb(req.query)
        console.log(req.user)
        res.status(200).json({
          success: true,
          message: "Get  all products",
          data: result,
        })
    }
    catch(err){
       next(err)
    }
}

const getSingleProduct:RequestHandler=async (req,res,next)=>{
    try{
        const id=req.params.id
        const result=await productServices.getSingleProductForDb(id)
        res.status(200).json({
           success: true,
           message: "Product successfully getted",
           data: result,
       });
    }
    catch(err){
       next(err)
    }
}
export const productController={
    createProduct,updateSingleProduct,
    deleteSingleProduct,getSingleProduct,
    getAllProducts
}