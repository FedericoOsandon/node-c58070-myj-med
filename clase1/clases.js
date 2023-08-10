class Persona { // swgar sintax 
    constructor(nombre, apellido, email){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
    }

    static especie = 'Humano'

    saludar() {
        return `Hola te estoy saludando, mi nombre es ${this.nombre} - ${this.apellido}`
    } 
    
    despedirse = ()=>{
        return `Adios me voy, no sin decirte que mi mail es ${this.email}`
    }

    static resultado = ()=>{
        return this.variableEstatica
    }
}





// const persona = new Persona('Fede', 'El mejor', 'f@gmail.com')
// console.log(Persona.saludar())
// const persona1 = new Persona('Fede1', 'El mejor 1', 'f1@gmail.com')
// const persona2 = new Persona('Fede2', 'El mejor 2', 'f2@gmail.com')

// console.log(persona.saludar())
// console.log(persona.despedirse())

// static dentro de clases
// console.log(Persona.variableEstatica)
// console.log(Persona.resultado())

// const fecha = new Date()
// console.log(fecha.toLocaleString())

// console.log(Date())

// console.log(Persona.nombre)
// console.log(Persona.saludar())
// const perro = new Animal()
// console.log(Animal.especie)



// contador 

class Contador {
    constructor(responsable){
        this.responsable = responsable
        this.count = 0
    }

    static globalCount = 0

    getResponsable = () => this.responsable

    contar = ()=>{
        this.count ++
        Contador.globalCount ++
    }

    getCount = ()=> this.count
    getGlobalCount = ()=> Contador.globalCount
}

const contador = new Contador('federico')

console.log(Contador.globalCount)


// funciones Persona(){} -> funciones constuctoras

// const persona = {
//     nombre: '',
//     apellido: '',
//     saludar: ()=>{}
// }
// const persona = {
//     nombre: '',
//     apellido: '',
//     email: ''
// }
// const persona = {
//     nombre: '',
//     apellido: '',
//     email: ''
// }
