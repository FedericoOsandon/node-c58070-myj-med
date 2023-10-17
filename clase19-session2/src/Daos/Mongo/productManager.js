const { productModel } = require("../../models/products.model")

class ProductManagerMongo {
    constructor(){
        this.model = productModel
    }
    async getProducts({limit=10, page=1, sort=1}){
        return await this.model.paginate({}, {limit, page, sort, lean: true})
    }
    async getProduct(condition){
        return  await this.model.findOne(condition)
    }
    async createProduct(newProduct){
        return await this.model.create(newProduct)
    }
    async updateProduct(pid){}
    async deleteProduct(pid){}
}
module.exports = {
    ProductManagerMongo
}