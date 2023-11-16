const { Schema, model } = require('mongoose')
// Crear una variable con un string con el nombre de la collections
const colleciton = 'products'

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
   
    price: {
        type: Number
    },
    stock: {
        type: Number
    },
    category: String,
    thumbnail: String,
    description: String,
    isActive: {
        type: Boolean,
        default: true
    }
})

const productModel = model(colleciton, ProductSchema)

module.exports = { productModel }