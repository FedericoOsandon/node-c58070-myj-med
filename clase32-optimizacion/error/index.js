const EErrors = require("../../services/errors/enums")

exports.errorHandler = () => (error, req, res, next) => {
    console.log(error.cause)
    switch (error.code) {
        case EErrors.INVALID_TYPES_ERROR:
            return res.send({status: 'error', erro: error.name})            
            break;
    
        default:
            return res.send({status: 'error', error: 'Unhandled error'})
            break;
    }
    // next()
}

