const passport = require('passport')
const GithubStrategy = require('passport-github2')
const UserManagerMongo = require('../Daos/Mongo/usersManager')

const userService = new UserManagerMongo()

const inizializePassport = ( ) => {
    // middleware/estrategia
    passport.use('github', new GithubStrategy({
        clientID: '',
        clientSecret: '',
        callbackURL: 'http://localhost:8080/api/sessions/githubcallback'
    }, async (accessToken, refreshToken, profile, done)=> {
        // console.log('profile: ', profile)
        try {
            let user = await userService.getUser({email: profile._json.email})
            if (!user) {
                let newUser = {
                    first_name: profile.username,
                    last_name: profile.username,
                    email: profile._json.email,
                    password: ''
                }

                let result = await userService.crateUsers(newUser)
                return done(null, result)
            }
            return done(null, user)
        } catch (error) {
            return done(error)
        }
    }) )


    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done)=>{
        let user = await userService.getUser({_id: id})
        done(null, user)
    })

}

module.exports = inizializePassport