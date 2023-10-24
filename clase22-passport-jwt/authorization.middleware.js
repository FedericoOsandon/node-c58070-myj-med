exports.authorization = role => {
    return async (req, res, next) => {
        console.log('role: ',role)
        console.log('req role: ',req.user.role)
        // doble validación ya realizada en passportCall
        if (!req.user) return res.status(401).json({status: 'error', error: 'Unauthorized'})
        if(req.user.role !== role) return res.status(403).json({status: 'error', error: 'Not permissions'})

        next()
    }
}