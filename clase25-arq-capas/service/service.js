const MessageDaoMongo = require("../Daos/Mongo/messagesDaosMongo");
const UserManagerMongo = require("../Daos/Mongo/usersManager");

const userService = new UserManagerMongo()
const messageService = new MessageDaoMongo()


module.exports = {
    userService,
    messageService
}