import fs from 'fs/promises'


async function getProdCommentsModel(id){
    try {
        const data = await fs.readFile(`./json/products_comments/${id}.json`, 'utf-8');
        console.log(data)
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return []
    }
}

export default getProdCommentsModel 