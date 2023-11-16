const ProductDaoMongo = require("../daos/Mongo/productsDaoMongo")
const ProductRepository = require("../repository/products.repository")

const serviceProducts = new ProductRepository(new ProductDaoMongo())

module.exports = {
    serviceProducts
}