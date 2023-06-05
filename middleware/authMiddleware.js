const jwt = require('jsonwebtoken');
const HttpError = require('../models/http-error');

const auth = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    const error = new HttpError('unauthorized', 401, 401);
    return next(error);
  }
  jwt.verify(token, 'myscreet' , (err, user) => {
    if (err) {
        const error = new HttpError('invalid token ', 401, 401 );
        return next(error);
    }
    req.user = user
    next()
  })
}

module.exports = {
    auth
}