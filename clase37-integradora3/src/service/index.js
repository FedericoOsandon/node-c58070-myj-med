const UserDaoMongo = require('../Daos/Mongo/userManager.js')
const UserRepository = require('../repositories/user.repository')


const userService = new UserRepository(new UserDaoMongo())

module.exports = {
    userService
}