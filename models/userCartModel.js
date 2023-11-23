import fs from 'fs/promises'


async function getUserCartModel() {
    try {
        const data = await fs.readFile(`./json/user_cart/25801.json`, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        console.log(error)
        return []
    }
}

export default getUserCartModel