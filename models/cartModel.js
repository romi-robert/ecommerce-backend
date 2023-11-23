import fs from 'fs/promises';

// Función para leer el archivo JSON y retornar los datos
async function createCartProdsModel({ products }) {
    try {
        await fs.writeFile('./json/cart/cart.json', JSON.stringify(products), {
            encoding: "utf8",
            flag: "w",
            mode: 0o666
        });
        // Leer el archivo recién creado
        const cart = await fs.readFile('./json/cart/cart.json', 'utf8');
        return JSON.parse(cart);
    } catch (error) {
        console.error('Error al escribir o leer el archivo JSON:', error);
        return [];
    }
}

export default createCartProdsModel