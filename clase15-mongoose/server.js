const express = require('express')

const mongoose = require('mongoose')

// conexión a la base de datos local
const conectDB = () => {
    mongoose.connect('mongodb://localhost:27017/c58070' ) // uri superconj de url http
    // mongoose.connect('mongodb+srv://Federico:<password>@coderexample.hjzrdtr.mongodb.net/c28070?retryWrites=true&w=majority') // uri superconj de url http
    console.log('base de datos conectada')
}
conectDB()


app.use('/api/users', userRouter)
