import {Router} from 'express'
import getCats from '../controllers/catsController.js'

const router = Router();

router
.get('/', getCats)

export default router

