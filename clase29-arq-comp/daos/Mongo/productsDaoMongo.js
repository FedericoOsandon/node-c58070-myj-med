const { productModel } = require("./models/products.model")

class ProductDaoMongo {
    constructor(){
        this.model = productModel
    }

    async get(){
        return await this.model.find({})
    }
    async getBy(filter){
        return await this.model.findOne(filter)
    }
    async create(newProduct){
        return await `create products`
    }
    async update(pid, updateProduct){
        return await `update products`
    }
    async delete(pid){
        return await `delete products`
    }
}

module.exports = ProductDaoMongo