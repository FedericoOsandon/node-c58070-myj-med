const { Router } = require('express')
const { productModel } = require('../models/products.model')
const { ProductManagerMongo } = require('../Daos/Mongo/productManager')

const router = Router()
const serviceProducts = new ProductManagerMongo()

// api/products /
router.get('/', async (req,res)=>{
    const {limit = 10, page= 1, order=1, category} = req.query
    const filtro = category ? {category} : {}
    const products = await productModel.paginate(filtro,{limit: parseInt(limit), page: parseInt(page),sort: {price: parseInt(order)}, lean: true})
    
    if (!products) {
        res.send({status: 'error', error: 'que no se encontraron productos'})
    }

    res.send({status: 'success', payload: products})
})
router.post('/', async (req,res)=>{
    try {
        const newProduct = req.body
        console.log(newProduct.title)
        // if (!newProduct.title  && !newProduct.code && !newProduct.price && !newProduct.stock) {
        if (!newProduct.title  ) {
            return res.send({status: 'error', error: 'El producto tiene que tener todos los campos'})
        }

        let result =  await serviceProducts.createProduct(newProduct)
        res.send({
            status: 'success',
            payload: result
        })
    } catch (error) {
        console.log(error)
    }
   
})
router.get('/:pid', async (req,res)=>{
    const { pid } = req.params
    const filtro = {_id: pid}
    const product = await productModel.findOne(filtro)
    res.send({status: 'success', payload: product})
})
router.put('/:pid', async (req,res)=>{
    res.send('update product')
})
router.delete('/:pid', async (req,res)=>{
    res.send('delete product')
})

module.exports = router