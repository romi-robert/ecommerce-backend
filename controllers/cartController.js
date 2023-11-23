import createCartProdsModel from "../models/cartModel.js"


async function createCartProds(req, res) {
    const { products } = req.body
    console.log(req.body)
    if (!products.length) res.status(400).json({ message: 'ameising' })
    const cartProds = await createCartProdsModel({ products: products })
    console.log('cart controller')
    res.json(cartProds);
}

export default createCartProds