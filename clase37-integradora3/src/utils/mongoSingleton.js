const { connect } = require('mongoose')

class MongoSingleton {
    static #instance 
    constructor(mongo_url){
        console.log(mongo_url)
        connect(mongo_url)
    }

    static getInstance(mongo_url){
        console.log(this.#instance)
        if (this.#instance) {
            console.log('base de datos ya conectada')
            return this.#instance
        }
        console.log(this.#instance)
        this.#instance = new MongoSingleton(mongo_url)
        console.log('base de datos conectada')
        return this.#instance
    }
}

module.exports = {
    MongoSingleton
}