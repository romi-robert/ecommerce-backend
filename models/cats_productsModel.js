import fs from 'fs/promises'


async function getCatsProductsModel(id){
    try {
        const data = await fs.readFile(`./json/cats_products/${id}.json`, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return []
    }
}

export default getCatsProductsModel