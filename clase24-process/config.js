const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { program } = require('../utils/commander')

const { mode } = program.opts()

console.log(mode)

dotenv.config({
    path: mode === 'development' ? './.env.development' : './.env.production'
})

const configObject = {
    port:      process.env.PORT,
    mongo_url: process.env.MONGO_URL
}

console.log('config object',configObject)

const conectDB = async () => {
    mongoose.connect(process.env.mongo_url) // uri superconj de url http
   
    console.log('base de datos conectada')
}

module.exports = {
    conectDB, 
    configObject
}


