const passport = require('passport')

exports.passportCall = strategy => {
    return async (req, res, next )=>{
        passport.authenticate(strategy, function(err, user, info){
            console.log('user pass call: ', user)
            if (err) return next(err)
            // preguntando si vien el usuario
            if (!user) {
                return res.status(401).send({error: info.messagge ? info.messagge : info.toString()})
            }

            req.user = user.user
            next()
        })(req, res, next)
    }
}