import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

let users = [

]

app.get('/api/users', (req, res)=>{
    res.send({
        status: 'success',
        payload: users
    })
})

// POST http://localhost:8080 /api/users

app.post('/api/users', (req,res)=>{
    let newUser = req.body
    if (!newUser.first_name || !newUser.last_name) return res.status(400).send({status: 'error', error: 'Datos incompletos'})
    newUser.id = users.length + 1 
    users.push(newUser)
    res.send({message: 'post api users', payload: users})
})

// PUT http://localhost:8080 /api/users
app.put('/api/users/:uid', (req,res)=>{
    let userUpdate = req.body
    let {uid} = req.params

    if (!userUpdate.first_name || !userUpdate.last_name) res.status(400).send({status: 'error', error: 'Datos incompletos'})
    let userIndex = users.findIndex(user => user.id === Number(uid))
    if (userIndex === -1) {
        return res.status(404).send({status: 'error', error: 'User no found'})
    }
    users[userIndex] = {...userUpdate, id: users[userIndex].id}
    res.send({message: 'post api users', payload: users})
})

// PUT http://localhost:8080 /api/users
app.delete('/api/users/:uid', (req,res)=>{
    let {uid} = req.params
    console.log(uid)   
    let userIndex = users.findIndex(user => user.id === Number(uid))
    if (userIndex === -1) {
        return res.status(404).send({status: 'error', error: 'User no found'})
    }

    users = users.filter(user => user.id !== Number(uid))
    
    res.send({message: 'post api users', payload: users})
})


app.listen(8080, ()=> console.log('escuchando en el puerto 8080'))

