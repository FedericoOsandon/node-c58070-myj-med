console.log('index.js')
const socket = io() 


const input = document.querySelector('#text')
const ulMensajes = document.querySelector('#ulMensajes')

input.addEventListener('keyup', evt => {
    if (evt.key === 'Enter') {
        socket.emit('mensajeInput', input.value)
        input.value=''
    }
})

socket.on('mensajesServer', data => {
    let texto = ''
    console.log(data)
    data.mensajes.forEach(element => {
        texto += `<li>${element.sid} dice: ${element.message}</li>`  
    })
    ulMensajes.innerHTML = texto
})