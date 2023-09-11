const products = []

class ProuductManagerMemory {  // dao persistencia memoria
    constructor(){
        this.products = products // array 
    }

    get = ()=> this.products
    
    getById = (pid)=> {
        const product = this.products.find(product => product.id === pid)

        if (!product) return 'No existe el producto'

        return  product
    }
    
    add = ( { title, description, price, img, code, stock } ) => {
        if(!title || !description || !price || !img || !code || !stock) return 'ingrese todos los parámetros parametros'

        const productExist = this.products.findIndex(product => product.code === code) 

        if (productExist !== -1) return 'ya éxiste el producto con ese cód..'

        this.products({ title, description, price, img, code, stock, id: this.products.length + 1 })

        return this.products
    }
}

// ______________________________________________________________________
const fileSystem = require('node:fs')
const { promises } = fileSystem
const fs = promises

class ProuductManagerFile {  // dao persistencia archivo
    constructor(){
        this.path = './files/Products.json'  
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
}

const productsFile = new ProuductManagerFile()

// productsFile.get()
// .then(res => console.log(res))
// .catch(err => console.log(err))
productsFile.getById(3)
.then(res => console.log(res))
.catch(err => console.log(err))
const prod = {
    title: 'prod 1',
    description: 'esta es una descripción',
    price: 1500,
    img: 'img',
    code: 2,
    stock: 150
}
// productsFile.add(prod)
// .then(res => console.log(res))
// .catch(err => console.log(err))
