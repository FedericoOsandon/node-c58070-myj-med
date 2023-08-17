// swggar syntax de promesas 

const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject)=>{ // tres estados -> pendiente - resuelta  - rechazada 
        if (divisor===0) {
            reject('no se puede dividir por cero')
        } else {
            setTimeout(()=>{
                resolve(dividendo/divisor)            
            },2000)
        }
    })
} 

// async function dividir(params) {    
// }
// const dividir = async (dividendo, divisor) => {
//     if (divisor === 0) {
//         return 'no se puede dividir por cero'
//     }
//    return dividendo/divisor
// }
// dividir(6,2)
// .then(resp=>console.log(resp))
// .catch(err => console.log(err))
// console.log(dividir(6,2))

// const ejecutarDividir = async ()=>{
//     try {
//         let resp = await dividir(6,3)
//         let reultadoMult = resp *2

//         console.log(reultadoMult)
        
//     } catch (error) {
//         console.log(error)
//     }
// }

ejecutarDividir()
