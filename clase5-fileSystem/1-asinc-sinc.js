let count = 0
console.log(count)
                                // setTimeout(()=> {
                                //     console.log('realizando tarea - no cuanto tarda 1 1/2 minuto')
                                // }, 1000) // asinc - no block
                                let countIntervel = 0
                                let timer = setInterval(()=> {
                                    console.log(countIntervel++)

                                    if (countIntervel>=5) {
                                        clearInterval(timer)
                                    }
                                }, 1000) // asinc - no block
count++
console.log(count)

