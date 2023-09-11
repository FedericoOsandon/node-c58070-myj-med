import express from 'express'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import cookieParser from 'cookie-parser'

import userRouter from './routes/users.router.js'
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import { uploader } from './utils/multer.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = 8080

app.use( express.static(__dirname + '/public') )
app.use(cookieParser())
app.use( express.json() )
app.use( express.urlencoded({extended: true}) )

// end point
app.use('/api/users',  userRouter ) 
//1 crear end piont
app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)


app.post('/',  uploader.single('file'), (req,res)=>{
    if (!req.file) {
        return res.status(400).send({status: 'error', error: 'no se pudo guardar la imagen'})
    }
    // console.log(req.file)

    res.send({status: 'success', message: 'archivo subido'})
}) 

app.use( function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Error en el server')
} ) 


app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})


