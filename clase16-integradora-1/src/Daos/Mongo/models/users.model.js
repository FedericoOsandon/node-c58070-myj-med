const { Schema, model } = require('mongoose')

const collection = 'users'

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name : {
        type: String
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const userModel = model(collection, userSchema)

module.exports = { userModel}