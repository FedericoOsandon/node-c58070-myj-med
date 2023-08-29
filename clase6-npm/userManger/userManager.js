// userManager -> userDao
const fs = require('node:fs') // --> modulo nativo
const crypto = require('node:crypto')
// const path = require('node:path')

const pathFile = './files/users.json'

class UserManager {
    constructor(){
        this.users = []
    }
    async readUsers(){
        // para guardar un usuario 
            //validar 
            if(fs.existsSync(pathFile)){
                const data = await fs.promises.readFile(pathFile, 'utf-8')
                this.users = JSON.parse(data)
                return this.users
            }
            await fs.promises.writeFile(pathFile, '[]', 'utf-8')
            return this.user
    }

    async createUser(newUser){ // nombre apellido password username
        try {
            const users = await this.readUsers()
            
            console.log(users)
            if (users.length === 0) {
                newUser.id = 1
            }else {
                newUser.id = users.length + 1
            }    
            
            newUser.salt = crypto.randomBytes(128).toString('base64')
            newUser.passwordHased = crypto.createHmac('sha256', newUser.salt).update(newUser.password).digest('hex')

            console.log(newUser)

            users.push(newUser)
            await fs.promises.writeFile(pathFile, JSON.stringify(users, null, 2))
        } catch (error) {
            console.log(error)
        }
    }

    async validateUser(username, password){
        const users = await this.readUsers()
        // console.log(users)
        const userIdx = users.findIndex(user => user.username === username)
        if(userIdx === -1) return `no existe el usuario`

        const user = users[userIdx]
        // console.log(user)

        const newPassHased = crypto.createHmac('sha256', user.salt).update(password).digest('hex')
        console.log(user.passwordHased, newPassHased)
        if(newPassHased === user.passwordHased){
            return `user logueado`
        }else{
            return `Password invalid`            
        }
    }
}

const user = new UserManager()
// user.createUser({first_name: 'fede', last_name: 'Osandón2', password: '123465', username: 'fede123'})
user.validateUser('fede123', '123465').then(res => console.log(res))