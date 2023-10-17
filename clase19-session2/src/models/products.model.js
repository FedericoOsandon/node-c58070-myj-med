const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
// Crear una variable con un string con el nombre de la collections
const colleciton = 'products'

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
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
    isValid: {
        type: Boolean,
        default: true
    }
})
ProductSchema.plugin(mongoosePaginate)
const productModel = model(colleciton, ProductSchema)

module.exports = { productModel }