const fs = require('node:fs') // sinc - asinc: callback - promesa

fs.writeFileSync('./data.txt', 'conenido de lo que quiero escribir 1', 'utf-8') // sinc y block

if (fs.existsSync('./data.txt')) {
        fs.appendFileSync('./data.txt', '\nagregando contenido al archivo ', 'utf-8')    
    }
    
const archivo = fs.readFileSync('./data.txt', 'utf-8')
console.log(archivo)
fs.unlinkSync('./data.txt')
console.log(fs.existsSync('./data.txt'))