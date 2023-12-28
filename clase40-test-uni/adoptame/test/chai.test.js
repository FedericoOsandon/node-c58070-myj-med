import chai from 'chai'
import mongoose from 'mongoose'
import User from '../src/dao/Users.dao.js'

mongoose.connect('mongodb://localhost:27017/c58070')
const expect = chai.expect
 
describe('Test con chai', () => {
    before(function (){
        this.userDao = new User()
    })

    it('El dao debe poder obtener los usuarios en formato arreglo', async function ()  {
        const result = await this.userDao.get()
        console.log(result)

        // expect(result).to.be.deep.equal([])
        // expect(result).deep.equal([])
        // expect(Array.isArray(result)).to.be.equal(true)
        expect(Array.isArray(result)).to.be.ok
    })
})