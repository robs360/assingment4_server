import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema= new Schema<TProduct>({
    book_name:{type:String,required:true},
    author:{type:String,required:true},
    title:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
},
{
    timestamps:true
})

export const productModel= model<TProduct>('products',productSchema)