import chai, { use } from 'chai';
import supertest from 'supertest';

const expect    = chai.expect
const requester = supertest('http://localhost:8080')

describe('Testing adoptame', ()=>{
//     let petId
//     describe('test de mascotas', ()=>{
//         it('El endpoint POST /api/pets debe crear una mascota correctamente', async ()=>{
//             const petMock = {
//                 name: 'Patitas',
//                 specie: 'Pez',
//                 birthDate: '10-10-2022'
//             }
//             const {
//                 statusCode,
//                 ok,
//                 _body
//             } = await requester.post('/api/pets').send(petMock)
//             petId = _body.payload._id
//             // console.log(statusCode)
//             // console.log(ok)
//             // console.log(_body)

//             expect(statusCode).to.equal(200)
//             expect(_body.payload).to.have.property('_id')
//             expect(_body.payload.adopted).to.equal(false)
//         })
        // it('El endpoint POST /api/pets debe devolver un status 400 si se quiere crear una mascota sin el campo nombre', async ()=>{
        //     const petMock = {
        //         // name: 'Patitas',
        //         specie: 'Perro',
        //         birthDate: '10-10-2022'
        //     }
        //     const {
        //         statusCode,
        //         ok,
        //         _body
        //     } = await requester.post('/api/pets').send(petMock)
        //     console.log(statusCode)
        //     // console.log(ok)
        //     // console.log(_body)

        //     expect(statusCode).to.equal(400)
            
        // })

        // it('El endpoint GET /api/pets debe devolver todas las mascotas en un array ', async ()=>{
        //     const {statusCode, ok, _body} = await requester.get('/api/pets')
        //     expect(ok).to.be.equal(true)
        // })
    //     it('El endpoint GET /api/pets/:pid debe devolver una mascota por id ', async ()=>{
    //         const {statusCode, ok, _body} = await requester.get(`/api/pets/${petId}`)
    //         expect(ok).to.be.equal(true)
    //         expect(statusCode).to.equal(200)
    //         expect(_body).to.have.property('payload')
    //         expect(_body.payload).to.have.property('_id')
    //         expect(_body.payload._id).to.equal(petId)

    //     })
    // })
    // describe('test de users', ()=>{
    //     let cookie
    //     const userMock = {
    //         first_name: 'Federico',
    //         last_name: 'Osanón',
    //         email: 'f@gmail.com', 
    //         password: '123456'
    //     }        
    //     it('El sistema debe registrar un usuario correctamente', async ()=>{

    //         const {_body} = await requester.post('/api/sessions/register').send(userMock)
    //         console.log(_body)
    //         expect(_body.payload).to.be.ok

    //     })
    //     it('El sistema debe loguear un usuario correctamente y devolver una cookie', async ()=>{
    //         const result = await requester.post('/api/sessions/login').send({
    //             email: userMock.email,
    //             password: userMock.password
    //         })
    //         // console.log(result.headers)
    //         const coookieResult = result.headers['set-cookie'][0]
    //         expect(coookieResult).to.be.ok
    //         cookie = {
    //             name: coookieResult.split('=')[0],
    //             value: coookieResult.split('=')[1]
    //         }
    //         expect(cookie.name).to.be.ok.and.eql('coderCookie')
    //         expect(cookie.value).to.be.ok
    //     })
    //     it('El sistema debe validar el token en la cookie correctamente en el endpoint current', async ()=>{
    //         const {_body} = await requester.get('/api/sessions/current').set('Cookie', [`${cookie.name}=${cookie.value}`])
    //         expect(_body.payload.email).to.be.eql(userMock.email)
    //     })
    // })
    describe('Test de uploads', ()=>{
        const petMock = {
            name: 'Patitas',
            specie: 'Perro',
            birthDate: '10-10-2022'
        }
        it('El sistema debe crear una mascota con una ruta de imagen', async ()=>{
            const {status, _body} = await requester.post('/api/pets/withimage')
                                    .field('name', petMock.name)
                                    .field('specie', petMock.specie)
                                    .field('birthDate', petMock.birthDate)
                                    .attach('image', './test/patitas.jpeg')


            expect(status).to.be.eql(200)
            expect(_body.payload).to.have.property('_id')
            expect(_body.payload.image).to.be.ok
            
        })
    })
})
