const { Schema, model } = require('mongoose')

const colleciton = 'products'

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
})

const productModel = model(colleciton, ProductSchema)

module.exports = { productModel }