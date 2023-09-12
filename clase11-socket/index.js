console.log('index.js')
const socket = io() 

socket.emit('message', 'Evento emitido por el cliente conectado')

socket.on('evento-para-el-actual', data=>{
    console.log(data)
})
socket.on('escuchan-todos-menos-actual', data => {
    console.log(data)
})
socket.on('evento-para-todos', data => {
    console.log(data)
})