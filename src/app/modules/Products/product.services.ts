
import { TProduct } from "./product.interface";
import { productModel } from "./products.model";
import { ObjectId } from "mongodb";

const createProductIntoDB = async (payload: TProduct) => {
    const result = await productModel.create(payload)
    return result
}

const updateProductIntoDB = async (id: string, updatedDoc: Partial<TProduct>) => {
    const option = { new: true };
    const result = await productModel.findByIdAndUpdate(id, updatedDoc, option)
    return result
}

const deleteProductFromDB = async (id: string) => {
    const query = { _id: new ObjectId(id) };
    const result = await productModel.deleteOne(query)
    return result
}

const getAllProductForDb = async (query:any) => {
    
    let search:string="";
   
    if(query){
       search=query.search
    }
    const filter = search
    ? {
          $or: [
              { category: { $regex: search, $options: "i" } },
              { title: { $regex: search, $options: "i" } }, 
              { author: { $regex: search, $options: "i" } }, 
          ],
      }
    : {};

    const result= await productModel.find(filter)
    return result
  };

  const getSingleProductForDb = async (id: string) => {
    const result = await productModel.findById(id);
    if (!result) {
      throw new Error("Data not found");
    }
    return result;
  };
export const productServices = {
    createProductIntoDB, updateProductIntoDB,
    deleteProductFromDB,getAllProductForDb,
    getSingleProductForDb
}