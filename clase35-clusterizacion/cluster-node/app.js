const cluster  = require('node:cluster')
const { cpus } = require('node:os') 
const { httpServerListen } = require("./src/server")

// console.log(process.pid)
// console.log(cluster.isPrimary)
// console.log('cantidad de hilos total de mi procesador',numeroDeProcesadores)
const numeroDeProcesadores = cpus().length


if (cluster.isPrimary) {
    console.log('Proceso primario, generando  proceso trabajador')
    for (let i = 0; i < numeroDeProcesadores; i++) {
        cluster.fork()       
    }
    cluster.on('message', worker => {
        console.log(`Mensaje recibido de el worker ${worker.pid}`)
    })
} else {
    console.log('Al ser un proceso forkeado, no cuento como primario, por lo tanto isPrimary=false - Soy un proceso hijo')
    httpServerListen()
}
