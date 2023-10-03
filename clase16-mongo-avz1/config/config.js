const mongoose = require('mongoose')
const { productModel } = require('../models/products.model')
const { cartModel } = require('../models/carts.model')

// conexión a la base de datos local
const conectDB = async () => {
    mongoose.connect('mongodb://localhost:27017/c58070' ) // uri superconj de url http
    // mongoose.connect('mongodb+srv://Federico:<password>@coderexample.hjzrdtr.mongodb.net/c28070?retryWrites=true&w=majority') // uri superconj de url http
    console.log('base de datos conectada')

    // creación de un producto
    // await productModel.create({
    //     title: 'Producto 3',
    //     code: '003',
    //     price: 3000
    // })

    // creación de un carrito
    // const result = await cartModel.create({})
    // console.log(result)

    // traer el carrito que necesito
    // const cart = await cartModel.findById({_id: '651c3fe98e5062e4fb9090ec'})
    // console.log(cart)
    // cart.products.push( {product: '651c3f243607d46c82352dd1'} )
    // let result = await cartModel.findByIdAndUpdate({_id: '651c3fe98e5062e4fb9090ec'}, cart)
    // console.log(result)

    // const cart = await cartModel.findOne({_id:'651c3fe98e5062e4fb9090ec'})
    // console.log(cart.products)
}

module.exports = {
    conectDB
}