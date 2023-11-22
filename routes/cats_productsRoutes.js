import {Router} from 'express'
import getCatsProducts from '../controllers/cats_productsController.js'

const router = Router();

router
.get('/:id', getCatsProducts)

export default router

