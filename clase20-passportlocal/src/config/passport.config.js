const passport = require('passport')
const local = require('passport-local')
const { userModel } = require('../models/user.model')
const { createHash, isValidPasword } = require('../utils/hash')


const LocalStrategy = local.Strategy

const initializePassport = () => {
    // middleware/strategy
    passport.use('register', new LocalStrategy({
            passReqToCallback: true, // acceder a la request (req)
            usernameField: 'email' // cambiar username por email
        }, async (req, username, password, done) => {
            const {first_name, last_name, email} = req.body
            try {
                let user = await userModel.findOne({email: email}) //( si tenemos el manager )
                if (user) {
                    console.log('User ya existe')
                    // autenticación fallida mensaje 
                    return done(null, false, {message: 'usuario ya existe'})
                }

                const newUser = {
                    first_name,
                    last_name,
                    email,
                    password: createHash(password)
                }

                let result = await userModel.create(newUser)
                return done(null, result)
            } catch (error) {
                return done(`Error al obtener un usuario ${error}`)
            }
        }
    )) 

    // middleware/strategy
    passport.use('login', new LocalStrategy({
            usernameField: 'email'
        }, async (username, password, done) => {
            try {
                const user = await userModel.findOne({email: username})
                if(!user){
                    console.log("User doesn't existe")
                    return done(null, false)
                }
                if(!isValidPasword(password, user)) return done(null, false)
                return done(null, user)
            } catch (error) {
                return done(error)
            }
        }        
    ))  

    // serializar en session
    passport.serializeUser((user, done) => {
        done(null, user._id)
    }) 
    
    // deserializar en session
    passport.deserializeUser(async (id, done) => {
        // buscando el user en la base de datos
        let user = await userModel.findById({_id: id})
        done(null, user)
    })
}

module.exports = {
    initializePassport
}