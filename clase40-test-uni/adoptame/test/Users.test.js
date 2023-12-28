import mongoose from 'mongoose'
import User from '../src/dao/Users.dao.js'
import Assert from 'assert'

mongoose.connect('mongodb://localhost:27017/c58070')
const assert = Assert.strict

describe('Testing Users Dao', () => {
    before(function () {
        // acciones antes del contexto actual
        this.userDao = new User()
    })
    beforeEach(function (){
        // acciones antes de cada test
        mongoose.connection.collections.users.drop()

        this.timeout(5000)
    })

    // it('El get de Users debe devolver un array de  usuario', async function (){
    //     const result = await this.userDao.get()
    //     // console.log(result)
    //     assert.strictEqual(Array.isArray(result), true)
    // })

    // it('El dao debe agregar un usuario correctamente a mongo', async function (){
    //     let userMock = {
    //         first_name: 'Juan',
    //         last_name: 'Perez',
    //         email: 'j@gmail.com',
    //         password: '123456'
    //     }
 
    //     const result = await this.userDao.save(userMock)
    //     assert.ok(result._id)
    // })

    it('El dao puede obtener un usuario por email', async function (){
        let userMock = {
                    first_name: 'Lucas',
                    last_name: 'Martinez',
                    email: 'l@gmail.com',
                    password: '123456'
                }
         
        const result = await this.userDao.save(userMock)
        const user = await this.userDao.getBy({email: result.email}) 
        console.log(user)
        assert.strictEqual(typeof user, 'object')
    })

})