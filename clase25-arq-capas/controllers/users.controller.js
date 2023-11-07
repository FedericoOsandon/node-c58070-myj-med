const { userService } = require("../service/service")

class UserController {
    constructor(){
        this.userService = userService
    }

    getUsers = async (req,res)=>{
        try {            
            let users = await this.usersService.getUsers()          
            res.send({status: 'success', payload: users})            
        } catch (error) {
            console.log(error)
        }
    }

    createUser = async (req,res) => {
        try {                  
            let {first_name, last_name, email} = req.body            
            if (!first_name || !last_name || !email ) return res.send({status: 'error', error: 'incomplete values'})        
            let result = await this.usersService.crateUsers({
                first_name,
                last_name,
                email
            })
          
            res.send({status: 'success', payload: result})
        } catch (error) {
            console.log(error)
        }
    
    }

    updateUser = async (req, res)=>{
        try {
            let {uid} = req.params
            let userToReplace = req.body
            if (!userToReplace.first_name || !userToReplace.last_name || !userToReplace.email ) return res.send({status: 'error', error: 'incomplete values'})        
            let result = await this.usersService.updateUsers({uid, userToUpdate})
            res.send({status: 'success', payload: result})
        } catch (error) {
            console.log(error)
        }
    }

    deleteUser = async (req, res)=>{
        try {
            let {uid} = req.params          
            let result = await this.usersService.deleteUsers(uid)
            res.send({status: 'success', payload: result})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new UserController()