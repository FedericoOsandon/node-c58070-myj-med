const fileSystem = require('node:fs')
const fs = fileSystem.promises

// fs.promises.writeFile('./data.txt', 'contenido', 'utf-8')
// .then(resp => console.log('archivo creado'))
// .catch(error => console.log(error))

const manejoArchivo = async ()=>{
    try {        
        // const personas = [
        //     {id: 1,nombre: 'fede', apellido: 'Osandón'},
        //     {id: 1,nombre: 'fede', apellido: 'Osandón'},
        //     {id: 1,nombre: 'fede', apellido: 'Osandón'},
        //     {id: 1,nombre: 'fede', apellido: 'Osandón'},
        // ]
        // await fs.writeFile('./data.json', JSON.stringify(personas, null, 2), 'utf-8')
        // console.log('archivo creado')

        // leer archivo

        // let data = await fs.readFile('./data.json', 'utf-8')
        // const dataParser = JSON.parse(data)
        // dataParser[0].tel = '123456m'
        // console.log(dataParser)
        // console.log(dataParser[0])
        
        // await fs.writeFile('./data.json', JSON.stringify(dataParser, null, 2))

        // await fs.appendFile('./data.txt', '\nnuevo contenido agregado', 'utf-8')
        // console.log('terminó de agregar')

        // await fs.unlink('./data.txt')

        // const result = await fs.readFile('./package.json')
        // const data = JSON.parse(result)
        // data.scripts.start = 'node app.js'
        // console.log(data.scripts)
        // await fs.writeFile('./package.json', JSON.stringify(data, null, 2))
        // console.log('archivo modificado')

        const result = await fs.readFile('./data.json', 'utf-8')
        const data = JSON.parse(result)
        data.push({id: 1, nombre: 'fede'})
        await fs.writeFile('./data.json', JSON.stringify(data, null,2), 'utf-8')
        console.log('listo')
    } catch (error) {
        console.log(error)
    }
}
manejoArchivo()
// fs.sync -> fs(cb) -> fs.promises
