import fileSystem from 'node:fs'

const { promises } = fileSystem
const fs = promises

export class ProuductManagerFile {  // dao persistencia archivo
    constructor(){
        this.path = './src/files/Products.json'  
    }

    readFileProducts = async () => {
        try {
            const productsJson = await fs.readFile(this.path, 'utf-8')
            return await JSON.parse(productsJson)            
        } catch (error) {
            return []
        }
    }

    get = async () => await this.readFileProducts() // devuelve todos los productos

    
    getById = async (pid)=> {
       const products = await this.readFileProducts()
       if(products.length === 0 ) return 'no hay productos' 

       let product = products.find(product => product.id === pid)
       if(!product) return 'No se encuentra el producto'

       return product
    }
    
    add = async ( { title, description, price, img, code, stock } ) => {
        if(!title || !description || !price || !img || !code || !stock) return 'ingrese todos los parámetros parametros'

        const products = await this.readFileProducts()        
        // console.log(products)
        const productExist = products.findIndex(product => product.code === code) 

        if (productExist !== -1) return 'ya éxiste el producto con ese cód..'

        products.push({ title, description, price, img, code, stock, id: products.length + 1 })

        await fs.writeFile(this.path, JSON.stringify(products, null, 2), 'utf-8' )

        return 'producto agregado'
    }
    // crear la lógica de estos dos metodos
    update = (pid) => {
        return 'actualizado carrito'+pid
    }

    delete = (pid)=> {
        return 'borrado el carrito'+pid
    }
}