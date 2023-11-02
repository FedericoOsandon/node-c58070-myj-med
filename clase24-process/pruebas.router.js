const { Router } = require('express')
const { fork }   = require('child_process')

const router = Router()

const operacionCompleja = ()=>{
    let result = 0
    for (let i = 0; i <10e9; i++) {
        result +=i         
    }
    return result
}

router.get('/block', (req, res) => { 
    
    const result = operacionCompleja()
    res.send({
        message: `El resultado es: ${result}`
    })
})


router.get('/no-block', (req, res) => {
    const child = fork('./src/routes/api/operacionComp.js') 
    child.send('Inicia el cáclulo por favor')
    child.on('message', result => {
        res.send({
            message: `El resultado es: ${result}`
        })
    })
})



module.exports = router