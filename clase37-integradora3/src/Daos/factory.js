const { config } = require('../config/config.js');

let UserDao

switch ('MONGO') {
    case 'MONGO':
        config.connectDb()
        const UserDaoMongo = require('./Mongo/userManager.js')
        UserDao = UserDaoMongo
        break;
    // case 'Flie':
        // const UserDaoMongo = require('./Mongo/userManager.js')
        // UserDao = UserDaoMongo
        // break;

    default:
        break;
}

modul.exports = UserDao