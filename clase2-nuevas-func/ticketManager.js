class TicketManager {
    #precioBaseGanancias = 1.15
    constructor(){
        this.eventos = []
    }

    getEventos = () => this.eventos

    agregarEvento = (nombre, lugar, precio, capacidad=50, fecha=new Date().toLocaleString()) => {
        const evento = {
            nombre,
            lugar,
            precio: precio * this.#precioBaseGanancias,
            capacidad,
            fecha,
            participantes: [] // [uid1, uid2]
        }

        if (this.eventos.length === 0) {
            evento.id = 1
        } else {
            evento.id = this.eventos.length + 1
        }

        this.eventos.push(evento)
    }

    agregarUsuario(eid, uid){
        // validación que existe el evento
        const eventoIndex = this.eventos.findIndex(evento => evento.id === eid)
        if (eventoIndex === -1 ) {
            return `El evento no existe`
        }
        // validar que en el evento no esté registrado el usuario
        const resultUser = this.eventos[eventoIndex].participantes.includes(uid) // true - false      
        if (resultUser) {
            return `El usuaiorio ya esta registrado en el evento`
        }

        this.eventos[eventoIndex].participantes.push(uid)
        return `El usuario fué registrado con éxito`
    }

    ponerEventoEnGira(eid, nuevaLocalidad, nuevaFecha){
        const eventoIndex = this.eventos.findIndex(evento => evento.id === eid)
        if (eventoIndex === -1) {
            return `No existe el evento`
        }

        const evento = this.eventos[eventoIndex]
        const newEvento = {
            ...evento,
            id: this.eventos.length+1,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            participantes: []
        }
        this.eventos.push(newEvento)
        return `nuevo evento creado`
    }

}

const ticket = new TicketManager()


ticket.agregarEvento('Evento 1 Coder', 'Argentina', 500, 55)
ticket.agregarEvento('Evento 2 Coder', 'España', 700)
console.log(ticket.agregarUsuario(2, 1))
console.log(ticket.agregarUsuario(1, 1))

console.log(ticket.agregarUsuario(2, 1))
console.log(ticket.agregarUsuario(2, 2))
console.log(ticket.getEventos())


