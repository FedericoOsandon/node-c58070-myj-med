const { Router } = require('express')
const { userModel } = require('../models/user.model')
const { auth } = require('../middleware/authentication')
const { ProductManagerMongo } = require('../Daos/Mongo/productManager')

const router = Router()

router.get('/login', (req,res)=>{
    res.render('login')
})
router.get('/register', (req,res)=>{
    res.render('register')
})

router.get('/', (req, res)=>{
    res.render('index', {
        name: 'federico'
    })
})

// http://localhost:8080/products?limit=3&page (vista) http://localhost:8080/api/products
// producto 
router.get('/products', async (req, res) => {
    // lógica
    const {limit, numPage, sort} = req.params
    let serviceProducts = new ProductManagerMongo()
    const {
        docs,
        hasPrevPage,
        prevPage,
        hasNextPage,
        nextPage,
        page
    } = await serviceProducts.getProducts({limit, page: numPage, sort: {price: sort}, lean: true})

    res.status(200).render('products', {
        products: docs,
        hasPrevPage,
        prevPage,
        hasNextPage,
        nextPage,
        page
    })
})


router.get('/realtimeproducts', (req, res) => {
    res.status(200).render('realTimeProduct')
})
router.get('/carts', (req, res) => {
    res.status(200).render('carts')
})
router.get('/users', auth, async (req, res) => {
    try {
        const {numPage=1, limit=20, query=''} = req.query
        let {
            docs,
            hasPrevPage, 
            hasNextPage,
            prevPage,
            nextPage,
            page
            // totalPages
        } = await userModel.paginate({}, {limit, page: numPage, lean: true})
            // console.log(totalPages)
        console.log(docs)
        // if () {
            
        // }
        // console.log(users)
        res.status(200).render('users', {
            users: docs,
            hasPrevPage, 
            hasNextPage,
            prevPage,
            nextPage,
            page
        })

    } catch (error) {
        console.log(error)
    }
   
})

router.get('/contacto', (req,res) => {
    
    res.render('contactos', {nombre: 'Fede'})
})

// vista del carrito
// vista del product / todos  / el detalle
// profile
// contactenos. 


module.exports = router