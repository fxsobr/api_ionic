"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_model_1 = require("../users/users.model");
const restify_errors_1 = require("restify-errors");
const jwt = require("jsonwebtoken");
const environments_1 = require("../common/environments");
exports.authenticate = (req, resp, next) => {
    const { email, password } = req.body;
    users_model_1.User.findByEmail(email, '+password').then(user => {
        if (user && user.matches(password)) {
            const token = jwt.sign({ sub: user.email, iss: 'api' }, environments_1.environment.security.apiSecret, { expiresIn: '1h' });
            resp.json({ name: user.name, email: user.email, acessToken: token });
            return next(false);
        }
        else {
            return next(new restify_errors_1.NotAuthorizedError('Invalid credentials'));
        }
    }).catch(next);
};
//# sourceMappingURL=auth.handler.js.map