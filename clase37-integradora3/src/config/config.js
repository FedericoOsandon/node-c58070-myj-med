// const { connect } = require('mongoose')
const dotenv = require('dotenv')
const { commander } = require('../utils/commander')
const { MongoSingleton } = require('../utils/mongoSingleton')

const { mode } = commander.opts()

dotenv.config({
    path: mode === 'development' ? './.env.development' : './.env.production'
})

const config = {
    port:       process.env.PORT || 8080,
    mongo_url:  process.env.MONGO_URL || '',
    gmail_user: process.env.GMAIL_USER,
    gmail_pass: process.env.GMAIL_PASS,
    connectDb: () => MongoSingleton.getInstance(process.env.MONGO_URL)
}




module.exports = { config }