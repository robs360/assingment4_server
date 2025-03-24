import express from "express"
import { userController } from "./user.controller"

const router=express.Router()

router.post('/create', userController.createUser)
router.get('/', userController.getAllUser)
router.get('/:id', userController.getSingleUser)
router.delete('/:id', userController.deleteSingleUser)
router.put('/active/:id', userController.activeUser)
router.put('/block/:id' ,userController.blockUser)
router.put('/:id', userController.updateSingleUser)

export const userRoutes=router