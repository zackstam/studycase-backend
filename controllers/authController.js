const HttpError = require('../models/http-error');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ userId: user._id, name: user.name }, 'myscreet', { expiresIn: '1800s' });
}


const login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({
            username,
        });
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!user || !isValidPassword) {
            const error = new HttpError('username or password wrong', 4014, 401);
            return next(error);
        }
        const token = generateToken(user);
        delete user.password;
        req.data = { user, token };
        next();
    } catch (error) {
        const err = new HttpError('authentication failed ', 503, 500)
        return next(err)
    }
}

module.exports = {
    login,
}