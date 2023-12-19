const { userService } = require("../service/index.js")


class UserController {
    constructor(){
        this.userService = userService
    }

    async getUsers(req, res){
        try {
            let users = await userService.getUsers()
            res.send({
                status: 'success',
                payload: users
            })
        } catch (error) {
            console.log(error)   
        }
    }
    async getUser(req, res){}
    async createUser(req, res){
        try {
            const newUser = req.body
    
            let result = await userService.createUser(newUser)
            res.send({
                status: 'success',
                payload: result
            })
        } catch (error) {
            console.log(error)   
        }
    }
    async updateUser(req, res){}
    async deleteUser(req, res){}
}

module.exports = UserController