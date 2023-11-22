import getProductsModel from '../models/productsModel.js'

async function getProducts(req,res){
    const id = req.params.id;
    const data = await getProductsModel(id)
    if(!data || data.length < 1) res.status(404).json({message:"No se encontraron prodcutos"})
    res.status(200).json(data)
}

export default getProducts 