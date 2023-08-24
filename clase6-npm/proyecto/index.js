const moment = require('moment')

// const hoy = moment().format('MMMM Do YYYY, h:mm:ss a')
const hoy = moment()
const fecheNacimiento = moment('1996-07-13', 'YYYY-MM-DD')
console.log(hoy)
console.log('fecha de nac: ',fecheNacimiento)
console.log(fecheNacimiento.isValid())
if (fecheNacimiento.isValid()) {
    console.log(`desde mi nac, han pasado ${hoy.diff(fecheNacimiento, 'days')} días`)
} else {
    console.log(`No se puede seguir por fecha inválida`)    
}