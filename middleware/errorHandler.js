const  {constants} = require('../constants');

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 5000;


    switch (statusCode) {
        case constants.Validation_ERROR:
            res.json({ tittle: "Validation_ERROR", message: err.message, stackTrace: err.stack });
            break;
        case constants.UNATHORIZED:
            res.json({ tittle: "UNATHORIZED", message: err.message, stackTrace: err.stack });
            break;
        case constants.FORBIDDEN:
            res.json({ tittle: "FORBIDDEN", message: err.message, stackTrace: err.stack });
            break;
        case constants.NOTFOUND:
            res.json({ tittle: "NOTFOUND", message: err.message, stackTrace: err.stack });
            break;
        case constants.SERVERERROR:
            res.json({ tittle: "SERVERERROR", message: err.message, stackTrace: err.stack });
            break;
        default:
           console.log('NO ERROR, All GOOD');
            break;
    }

    res.status(statusCode).json({ message: message, stackTrace: err.stack });
}



module.exports = errorHandler;