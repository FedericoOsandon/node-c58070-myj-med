// obj que se crea ejecutamos 
// console.log(process.cwd())
// console.log(process.pid)
// console.log(process.memoryUsage())
// console.log(process.version)
// console.log(process.argv)

// node process.js 1 2 3 
// console.log(process.argv.slice(2))

// const { Command } = require('commander') 

// const program = new Command()

// program
//     .option('-d', 'Variable para debug', false)
//     .option('-p <port>', 'Variable para el puerto', 8080)
//     .option('--mode <mode>', 'Modo de ejecución de la application', 'development')
//     .parse()

//     console.log('Options: ', program.opts())
//     console.log('Argumento: ', program.args)


/// process listener 

process.on('exit', code => {
    console.log('antes de salir de processo', code)
})

process.on('uncaughtException', exception => {
    console.log('ESte atrapa todos los errores no controlados, una variable o función que no exista', exception)
})

process.on('message', message => {
    console.log('Mandar mensajes a otro processo')
})

console.log('ejecutando cód')
console.log(fede)

