import * as restify from "restify";
import {ModelRouter} from "../common/model-router";
import {Teacher} from "./teachers.model";
import {authorize} from "../security/authz.handler";

class TeachersRouter extends ModelRouter<Teacher>{
    constructor(){
        super (Teacher)
    }

    applyRoutes(application: restify.Server){

        application.get(`${this.basePath}`, this.findAll)
        application.get(`${this.basePath}/:id`, [this.validateId, this.findById])
        application.post(`${this.basePath}`, [this.save])
        application.put(`${this.basePath}/:id`, [this.replace])
        application.del(`${this.basePath}/:id`, [this.delete])
    }
}

export const teachersRouter = new TeachersRouter()