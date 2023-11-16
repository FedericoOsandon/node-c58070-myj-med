const { serviceProducts } = require("../service/service")


class ProductController {
    constructor(){
        this.service = serviceProducts
    }
    getProducts = async (req,res)=>{
        try {
            const products = await this.service.getProducts()
            
            res.send({
                status: 'success', 
                payload: products
            })
            
        } catch (error) {
            console.log(err)
        }
    }

    getProduct = async (req,res)=>{
        try {
            const {pid} = req.params
            const product = await this.service.getProduct({_id: pid}) 
            res.send({
                status: 'success', 
                payload: product
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    createProduct = async(req,res)=>{
        res.send({
            status: 'success', 
            payload: 'post products'
        })
    }
    updateProduct = async (req,res)=>{
        res.send({
            status: 'success', 
            payload: 'put products'
        })
    }
    deleteProduct = async (req,res)=>{
        res.send({
            status: 'success', 
            payload: 'delete products'
        })
    }
}

module.exports = ProductController