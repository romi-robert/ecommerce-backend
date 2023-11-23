import { Router } from 'express'
import createCartProds from '../controllers/cartController.js';

const router = Router();

router.post('/', createCartProds)

export default router