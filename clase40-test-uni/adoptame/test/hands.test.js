import chai from 'chai'
import { createHash, passwordValidation } from '../src/utils/index.js'

import UserDTO from '../src/dto/User.dto.js'
const expect = chai.expect

// describe('Testing de Bcrypt utility', () => {
    
//     it('El servicio debe devolver un haseo efectivo del password', async function(){
//         const password = '123456'
//         const hashPassword = await createHash(password)

//         expect(hashPassword).to.not.equal(password)
//     })
//     it('El servicio de password validate debe validar el hash con el  password', async function(){
//         const password = '123456'
//         const hashPassword = await createHash(password)

//         const isValidate = await passwordValidation({password: hashPassword}, password)
//         expect(isValidate).to.be.true
//     })
//     it('El servicio de password validate debe validar falla si se altera el password validado', async function(){
//         const password = '123456'
//         const hashPassword = await createHash(password)

//         const passAlterate = hashPassword + '1'


//         const isValidate = await passwordValidation({password: passAlterate}, password)
//         expect(isValidate).to.be.false
//     })

// })
describe('Test de dto', ()=>{
    before(function (){
        this.userDto = UserDTO
    })
    it('Dto debe normalizar los datos del user', async function(){
        const userToToken = UserDTO.getUserTokenFrom({
            first_name: 'Federico',
            last_name: 'Osandón',
            email: 'f@gmail.com',
            password: '123456'
        })
    
        expect(userToToken).to.have.property('name', 'Federico Osandón')

    })
    it('Dto debe no tener en cuenta los datos innecesarios ', async function(){
        const userToToken = UserDTO.getUserTokenFrom({
            first_name: 'Federico',
            last_name: 'Osandón',
            email: 'f@gmail.com',
            password: '123456',
            createAt: Date(),
            phone: '321654'
        })
    
        expect(userToToken).to.not.have.property('first_name')
        expect(userToToken).to.not.have.property('last_name')
        expect(userToToken).to.not.have.property('password')
        expect(userToToken).to.not.have.property('phone')
        

    })
})
