import express from "express"
import { productController } from "./product.controller"
import { auth } from "../../middlewares/auth"

const router=express.Router()

router.get('/', productController.getAllProducts)
router.post('/create', productController.createProduct)
router.put('/:id', productController.updateSingleProduct )
router.delete('/:id', productController.deleteSingleProduct)
router.get('/:id', productController.getSingleProduct)
export const productRouter=router
