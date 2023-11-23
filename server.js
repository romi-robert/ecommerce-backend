import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()


import catsRoutes from './routes/catsRoutes.js'
import catsProductsRoutes from './routes/cats_productsRoutes.js'
import productsRoutes from './routes/productsRoutes.js'
import productCommentsRoutes from './routes/products_commentsRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import userCartRoute from './routes/userCartRoutes.js'
import authRoutes from './routes/authRoutes.js'
import { verifyToken } from './models/authModel.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('holis')
})

app.use('/cats', verifyToken, catsRoutes)
app.use('/cats_products', verifyToken, catsProductsRoutes)
app.use('/products', verifyToken, productsRoutes)
app.use('/products_comments', verifyToken, productCommentsRoutes)
app.use('/cart', verifyToken, cartRoutes)
app.use('/userCart', verifyToken, userCartRoute)
app.use('/login', authRoutes)

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
})

// git init 
// git add .
// git commit -m "initial commit"
// git remote add URL
// git push -u origin main