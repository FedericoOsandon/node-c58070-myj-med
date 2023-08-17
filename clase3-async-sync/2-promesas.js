const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject)=>{ // tres estados -> pendiente - resuelta  - rechazada 
        if (divisor===0) {
            reject('no se puede dividir por cero')
        } else {
            resolve(dividendo/divisor)            
        }
    })
} 

dividir(6,3)
.then(respuesta => respuesta * 2)
.then(respuesta => respuesta + 10)
.catch(err => console.log(err))
.then(result => console.log(result))