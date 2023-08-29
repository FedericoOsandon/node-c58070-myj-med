// const express = require('express') //commond
import express from 'express' // module

const app = express()

const usuarios = [
    {id: 1, first_name: 'nombre 1', last_name: 'apellido 1', email: 'example1@gmail.com'},
    {id: 2, first_name: 'nombre 2', last_name: 'apellido 2', email: 'example2@gmail.com'},
    {id: 3, first_name: 'nombre 3', last_name: 'apellido 3', email: 'example3@gmail.com'},
    {id: 4, first_name: 'nombre 4', last_name: 'apellido 4', email: 'example4@gmail.com'}
]

app.get('/', (req, res)=> {
    res.send({usuarios})
})
app.get('/:uid', (req, res)=> {
    const { uid } = req.params
    console.log(typeof uid)
    const user = usuarios.find(user => user.id === Number(uid))
    if (!user) {
        return res.send({error: 'no se encuentra el usuario'})
    }
    
    res.send({user})
})

app.listen(8080, ()=> console.log('escuchando en el puerto 8080'))