import fileSystem from 'node:fs'

const { promises } = fileSystem
const fs = promises

export class CartsManagerFile{
    constructor(){
        this.path = './files/Carts.json'  
    }

    readFileProducts = async () => {
        try {
            const productsJson = await fs.readFile(this.path, 'utf-8')
            return await JSON.parse(productsJson)            
        } catch (error) {
            return []
        }
    }

    create = () => {
        console.log('Creando carrito')
    } // crear el carrito
    getById = ()=> { // traer el carrito por id
        console.log('Trayendo carrito por id')
    } 
    addProductToCart = () => {
        // agrega un producto al carrito con cierto id
        console.log('agregando carrito')
    } 
}



// productos -> /api/products
// carrito -> /api/carts

// cartsManager y prodctsManagar 

// carrito manager: 
// post crea un carrito con el fswormato de abajo
// get by id
// post 

// [
//     {
//         id: 'asdkfjasdjf.ahjsd54',
//         products: [
//             {pid: 'asdfasdfasdfaj..sajd', quantity: 3},
//             {pid: 'hfasdf.63sadfasdf', quantity: 1}
//         ]
//     }
// ]
// daos (manager) - data access objects (crud) de persistencia (memory, file, base de datos)