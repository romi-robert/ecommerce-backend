import {Router} from 'express'
import getProdComments from '../controllers/products_commentsController.js'

const router = Router();

router
.get('/:id', getProdComments)

export default router

