import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()


import catsRoutes from './routes/catsRoutes.js'
import catsProductsRoutes from './routes/cats_productsRoutes.js'
import productsRoutes from './routes/productsRoutes.js'
import productCommentsRoutes from './routes/products_commentsRoutes.js'

const app = express()
const PORT = process.env.PORT

app.use(cors())

app.get('/', (req, res)=>{
    res.send('holis')
})
 
app.use('/cats', catsRoutes)
app.use('/cats_products', catsProductsRoutes)
app.use('/products', productsRoutes)
app.use('/products_comments', productCommentsRoutes)

app.listen(PORT, ()=>{
console.log(`servidor corriendo en el puerto ${PORT}`)
})

// git init
// git add .
// git commit -m "initial commit"
// git remote add URL
// git push -u origin main