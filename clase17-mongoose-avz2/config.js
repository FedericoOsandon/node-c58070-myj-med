const mongoose = require('mongoose')

const { orderModel } = require('../models/orders.models')

// conexión a la base de datos local
const conectDB = async () => {
    mongoose.connect('mongodb://localhost:27017/c58070' ) // uri superconj de url http
    // mongoose.connect('mongodb+srv://Federico:<password>@coderexample.hjzrdtr.mongodb.net/c28070?retryWrites=true&w=majority') // uri superconj de url http
    console.log('base de datos conectada')

    // insertar órdernes de pizzas
    // let result = await orderModel.insertMany([

    //     { name: "Pepperoni", size: "small", price: 19,
    
    //       quantity: 10, date:"2021-03-13T08:14:30Z" },
    
    //     { name: "Pepperoni", size: "medium", price: 20,
    
    //       quantity: 20, date :"2021-03-13T09:13:24Z"},
    
    //     { name: "Pepperoni", size: "large", price: 21,
    
    //       quantity: 30, date :"2021-03-17T09:22:12Z"},
    
    //     { name: "Cheese", size: "small", price: 12,
    
    //       quantity: 15, date :"2021-03-13T11:21:39.736Z" },
    
    //     { name: "Cheese", size: "medium", price: 13,
    
    //       quantity:50, date : "2022-01-12T21:23:13.331Z"},
    
    //     { name: "Cheese", size: "large", price: 14,
    
    //       quantity: 10, date : "2022-01-12T05:08:13Z"},
    
    //     { name: "Vegan", size: "small", price: 17,
    
    //       quantity: 10, date : "2021-01-13T05:08:13Z"},
    
    //     { name: "Vegan", size: "medium", price: 18,
    
    //       quantity: 10, date : "2021-01-13T05:10:13Z"}
    
    // ])
    // console.log(result)

    // traer todas las ordenes de pizzas de la DB
    // let orders = await orderModel.find()
    // console.log(orders)

    // stages para saber que pizzas se vendieron mas
    // let tamanioPizza = 'medium'
    // let orders = await orderModel.aggregate([
    //     {
    //         $match: {size: tamanioPizza}
    //     },
    //     {
    //         $group: {_id: '$name', totalQuantity: {$sum: '$quantity'}}
    //     },
    //     {
    //         $sort: {totalQuantity: -1}
    //     },
    //     {
    //         $group: {_id: 1, orders: {$push: '$$ROOT'}}
    //     },
    //     {
    //         $project: {
    //             "_id": 0,
    //             orders: "$orders"
    //         }
    //     },
    //     {
    //         $merge: {into: 'reports'}
    //     }
    // ])
    // console.log(orders)
}

module.exports = {
    conectDB
}


