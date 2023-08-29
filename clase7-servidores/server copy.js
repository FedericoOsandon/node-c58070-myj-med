const http = require('node:http')

const server = http.createServer((request, response ) => {
    console.log(request.method)
    console.log(request.url)
    if (request.url === '/') {
        response.end('Hola este es mi primer server backend')
        
    } if (condition) {
        
    } else {
        
    }
    
})

server.listen(8000, ()=> {
    console.log('listent on port 8080')
})