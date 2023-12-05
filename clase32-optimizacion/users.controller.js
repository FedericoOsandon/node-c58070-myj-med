const { userService } = require('../service')

const CustomeError = require('../utils/errors/CustomError')
const { generateUserErrorInfo } = require('../utils/errors/info')
const { EErrors } = require('../utils/errors/EErrors')

const users = []
class UserController{
    
    createUser = async (request, response, next) =>{
        try {
            //mada el  cliente request 
            let {first_name, last_name, email} = request.body
            if (!first_name || !last_name ||!email) {
                // custome error class
                CustomeError.createError({
                    name: "User creation error",
                    cause: generateUserErrorInfo({first_name, last_name, email}),
                    message: "Error trying to created user",
                    code: EErrors.INVALID_TYPE_ERROR
                })

                // return response.status(400).send({ message: 'Che pasar todos los datos'})
            }
            // console.log('user post',user)
            
            let userAgregado = users.push({first_name, last_name, email})
            // let userAgregado = await userService.createUser({first_name, last_name})
            // console.log(userAgregado)
    
            response.status(201).send({ 
                users,
                userAgregado,
                message: 'usuario creado' 
            })
            
        } catch (error) {
            next(error)
        }
    }
   
}

module.exports = new UserController