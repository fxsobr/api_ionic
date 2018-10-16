import * as restify from 'restify'
import {User} from "../users/users.model";
import {NotAuthorizedError} from "restify-errors"
import * as jwt from 'jsonwebtoken'
import {environment} from "../common/environments";

export const authenticate: restify.RequestHandler = (req, resp, next)=>{
    const {email, password} = req.body
    User.findByEmail(email, '+password').then(user =>{
        if (user && user.matches(password)){
            const token = jwt.sign({sub: user.email, iss: 'api'}, environment.security.apiSecret, {expiresIn: '1h'})
            resp.json({name: user.name, email: user.email, acessToken: token})
            return next(false)
        }else {
            return next(new NotAuthorizedError('Invalid credentials'))
        }
    }).catch(next)
}