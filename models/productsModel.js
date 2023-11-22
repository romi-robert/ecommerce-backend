import fs from 'fs/promises'


async function getProductsModel(id){
    try {
        const data = await fs.readFile(`./json/products/${id}.json`, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return []
    }
}

export default getProductsModel