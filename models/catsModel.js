import fs from 'fs/promises'


async function catsModel(){
    try {
        const data = await fs.readFile(`./json/cats/cat.json`, 'utf-8')
        console.log(data)
        return JSON.parse(data)
    } catch (error) {
        console.log(error)
        return []
    }
}

export default catsModel