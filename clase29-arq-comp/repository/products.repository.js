class ProductRepository {
    constructor(dao){
        this.dao = dao
    }

    async getProducts(){
        try {
            return await this.dao.get()
        } catch (err) {
            console.log(err)
        }

    }
    async getProduct(filter){
        try {
            return await this.dao.getBy(filter)
        } catch (err) {
            console.log(err)
        }
    }
    async createProduct(newProduct){
        return await this.dao.create(newProduct)
    }
    async updateProduct(pid, product){
        return await this.dao.update(pid, product)
    }
    async deleteProduct(pid){
        return await this.dao.delete(pid)

    }
}
module.exports = ProductRepository