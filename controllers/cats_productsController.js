import getCatsProductsModel from '../models/cats_productsModel.js'

async function getCatsProducts(req,res){
    const id = req.params.id;
    const data = await getCatsProductsModel(id)
    if(!data || data.length < 1) res.status(404).json({message:"No se encontraron categorias"})
    res.status(200).json(data)
}

export default getCatsProducts