
const suma = (...numeros) => {
    if(numeros.length === 0) return 0
    if(!numeros.every(numero => typeof numero === 'number')) return null
    return numeros.reduce((result, numero) => result += numero)
}

module.exports = {
    suma
}