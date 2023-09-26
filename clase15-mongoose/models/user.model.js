const {Schema, model} = require('mongoose')

const userCollection = 'users'

const userSchema = new Schema({ // tupado
    first_name: String,
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true
    }
})

const userModel = model(userCollection, userSchema) // metodos acciones para interactuar con la base de datos 

module.exports = { userModel }