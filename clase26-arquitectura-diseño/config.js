const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { program } = require('../utils/commander')
const MongoSingleton = require('../utils/MongoSingleton')

const { mode } = program.opts()

dotenv.config({
    path: mode === 'development' ? './.env.development' : './.env.production'
})

const configObject = {
    port:      process.env.PORT,
    mongo_url: process.env.MONGO_URL,
    cookie_key: process.env.COOKIE_KEY,
    jwt_sign_key_secret: process.env.JWT_SIGN_KEY_SECRET,
    gh_client_id: process.env.GH_CLIENT_ID,
    gh_client_secret: process.env.GH_CLIENT_SECRET,
    gh_callback_url: process.env.GH_CALLBACK_URL,
    conectDB:   () =>  MongoSingleton.getInstance(process.env.MONGO_URL)
    // conectDB: async () => {
    //     try {
    //         mongoose.connect(process.env.mongo_url) // uri superconj de url http   
    //         console.log('base de datos conectada')        
    //     } catch (error) {
    //         console.log('Error al conectarse con la base de datos: ',error)
    //     }
    // }
}

module.exports = {
    configObject
}


