// clase va a tener variables y métodos estáticos (que puedo usar sin instanciar la clase)

const mongoose = require("mongoose");

class MongoSingleton {
    static #instance 

    constructor(mongo_url){
        mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

    static getInstance(mongo_url){
        if (this.#instance) {
            console.log('Base de datos ya creada')
            return this.#instance
        }
        this.#instance = new MongoSingleton(mongo_url)
        console.log('Base de Datos creada')
        this.#instance
    }
}

module.exports = MongoSingleton


