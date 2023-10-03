const { Router } = require('express')
const { cartModel } = require('../models/carts.model')

const router = Router()

router.get('/', async (req, res) => {
    const cart = await cartModel.findOne({_id:'651c3fe98e5062e4fb9090ec'})
    // const cart = await cartModel.findOne({_id:'651c3fe98e5062e4fb9090ec'}).populate('products.product')
    // console.log(cart.products)
    res.send({
        status: 'success',
        payload: cart
    })
})


module.exports = router