import { Router } from 'express'
import getUserCart from '../controllers/userCartController.js'


const router = Router();

router
    .get('/', getUserCart)

export default router

