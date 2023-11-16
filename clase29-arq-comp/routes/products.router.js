const { Router } = require('express')
const ProductController = require('../controller/products.controller')
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = new ProductController()
const router = Router()

router.get('/', getProducts)
router.get('/:pid', getProduct)
router.post('/', createProduct)
router.put('/', updateProduct)
router.delete('/', deleteProduct)

module.exports = router