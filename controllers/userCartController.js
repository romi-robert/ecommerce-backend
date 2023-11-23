import getUserCartModel from '../models/userCartModel.js'


async function getUserCart(req, res) {
    const data = await getUserCartModel()
    if (!data) res.status(404).json({ message: "no se encontró data" })
    res.status(200).json(data)
}

export default getUserCart