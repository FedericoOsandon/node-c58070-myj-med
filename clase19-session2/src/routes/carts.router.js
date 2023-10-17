const { Router } = require('express')
const { cartModel } = require('../models/carts.model')
const CartManagerMongo = require('../Daos/Mongo/cartsManager')

const router = Router()
const serviceCarts = new CartManagerMongo()
// cre
// traer un carrito por id
router.get('/:cid', async (req, res) => {
    const {cid} = req.params
    // const cart = await cartModel.findOne({_id:'651c3fe98e5062e4fb9090ec'})
    const cart = await serviceCarts.getCartBy({_id: cid})
    // const cart = await cartModel.findOne({_id:'651c3fe98e5062e4fb9090ec'}).populate('products.product')
    // console.log(cart.products)
    res.send({
        status: 'success',
        payload: cart
    })
})



// /api/carts - PUT - /:cid/products/:pid
router.put('/:cid/products/:pid', async (req, res) => {
    const {cid, pid} = req.params
    const {quantity} = req.body 
    // if (!cart) {
    //     // return res
    // }
    
    
    const result = await serviceCarts.addProducToCart({cid, pid, quantity})
    // console.log(result)
    res.send({status: 'success', payload: 'result'})
})
// /api/carts - delete - /:cid/products/pid
router.delete('/:cid/products/:pid', async (req, res) => {
    res.send({status: 'success', payload: 'result'})
})

//  api/carts - PUT - /:cid
router.put('/:cid', async (req, res) => {})

// /api/carts - delete - /:cid
router.delete('/:cid', async (req, res) => {
    res.send({status: 'success', payload: 'result'})
})

module.exports = router