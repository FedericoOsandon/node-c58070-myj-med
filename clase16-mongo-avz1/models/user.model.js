const {Schema, model} = require('mongoose')

const userCollection = 'users'

const userSchema = new Schema({ // tupado
    first_name:{
        type: String,
        index: true  // index
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true
    },
    gender: String
})

const userModel = model(userCollection, userSchema) // metodos acciones para interactuar con la base de datos 

module.exports = { userModel }