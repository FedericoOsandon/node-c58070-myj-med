import { Router } from 'express'
// import la clase
import { ProuductManagerFile } from '../daos/productsManger.js'

const router = Router()
// instanciar la clase
const prouctService = new ProuductManagerFile()

// traer todos los products
router.get('/', async (req, res)=>{
    const products = await prouctService.get()
    console.log(products)

    res.status(200).send({
        status: 'success',
        payload: products
    })
})

router.get('/:pid', async (req, res)=>{
    const {pid} = req.params
    // if (isNaN(pid)) {
        
    // }
    const proudct = await prouctService.getById(parseInt(pid))

    res.status(200).send({
        status: 'success',
        payload: proudct
    })
})

router.post('/', async (req, res)=>{
    const proudctNew = req.body

    const result = await prouctService.add(proudctNew)

    res.status(200).send({
        stauts: 'success', 
        payload: result
    })
})

router.put('/:pid', async (req, res)=>{
    res.status(200).send('update product')
})
router.delete('/:delete', async (req, res)=>{
    res.status(200).send('delete proudct')
})

export default router