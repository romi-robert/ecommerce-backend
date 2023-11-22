import getProdCommentsModel from '../models/products_commentsModel.js'

async function getProdComments(req,res){
    const id = req.params.id;
    const data = await getProdCommentsModel(id)
    if(!data || data.length < 1) res.status(404).json({message:"No se encontraron comentarios"})
    res.status(200).json(data)
}

export default getProdComments 