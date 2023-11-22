import catsModel from '../models/catsModel.js'


async function getCats(req,res) {
    const data = await  catsModel()
    if(!data) res.status(404).json({message:"no se encontró data"})
    res.status(200).json( data)
}

export default getCats