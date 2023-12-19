const { userModel } = require("./models/users.model.js")
// UserDaoMongo
class UserDaoMongo {
    constructor(){
        this.model = userModel
    }

    async get(){
        try {
            return await this.model.find({})
        } catch (error) {
            console.log(error)
        }
    }
    getBy = async (filter)=>{
        return await this.model.findOne(filter)
    }
    async create(newUser){
        return await this.model.create(newUser)
    }
    async update(){}
    async delete(){}
} 

module.exports = UserDaoMongo 