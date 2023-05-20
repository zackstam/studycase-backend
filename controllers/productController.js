const { GENERAL_ERROR_CODE } = require("../constant/errorCode");
const { ERROR_SERVER } = require("../constant/errorHttp");
const { GENERAL_ERROR_MESSAGE } = require("../constant/errorMessage");

const all = (req, res, next) => {
    try {
        req.data = {};;
        next();
    } catch (err) {
        const error = new HttpError(GENERAL_ERROR_MESSAGE, GENERAL_ERROR_CODE, ERROR_SERVER);
        next(error)
    }
}

const create = async (req, res, next) => {
    try {

        req.data = {};
        next();
    } catch(err) {
        const error = new HttpError(GENERAL_ERROR_MESSAGE, GENERAL_ERROR_CODE, ERROR_SERVER);
        next(error)
    }
}

module.exports = {
    create,
    all
}