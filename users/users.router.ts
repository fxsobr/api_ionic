import * as restify from "restify";
import {User} from "./users.model";
import {NotFoundError} from "restify-errors";
import {ModelRouter} from "../common/model-router";
import {authenticate} from "../security/auth.handler";
import {authorize} from "../security/authz.handler";


class UsersRouter extends ModelRouter<User>{

    constructor(){
        super(User)
        this.on('beforeRender', document=>{
            document.password = undefined
        })
    }

    findByEmail = (req, resp, next)=>{
        if (req.query.email){
            User.findByEmail(req.query.email)
                .then(user => {
                    if (user){
                        return [user]
                    } else {
                        resp.send(403)
                    }
                })
                .then(this.renderAll(resp,next,{
                    pageSize: this.pageSize,
                    url: req.url
                }))
                .catch(next)
        } else {
            next()
        }
    }

    applyRoutes(application: restify.Server){
        application.get({path:`${this.basePath}`}, [this.findByEmail, this.findAll])
        application.get({path:`${this.basePath}`},authorize('admin'), this.findAll)
        application.get(`${this.basePath}/:id`, [authorize('admin'),this.validateId, this.findById])
        application.post(`${this.basePath}`, this.save)
        application.put(`${this.basePath}/:id`, [authorize('admin'),this.validateId,this.replace])
        application.patch(`${this.basePath}/:id`, [authorize('admin'),this.validateId,this.update])
        application.del(`${this.basePath}/:id`, [authorize('admin'),this.validateId,this.delete])

        application.post(`${this.basePath}/authenticate`, authenticate)
        application.get(`${this.basePath}/esqueceuSenha/:email`, this.findByOneEmail)
    }
}

export const usersRouter = new UsersRouter();
