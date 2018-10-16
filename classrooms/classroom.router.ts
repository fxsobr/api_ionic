import * as restify from "restify";
import {ModelRouter} from "../common/model-router";
import {Classroom} from "./classroom.model";

class TeachersRouter extends ModelRouter<Classroom>{
    constructor(){
        super (Classroom)
    }


    findById = (req, resp, next)=>{
        this.model.findById(req.params.id)
            .populate('teacher','name')
            .then(this.render(resp,next)).catch(next)
    }


    applyRoutes(application: restify.Server){

        application.get(`${this.basePath}`, this.findAll)
        application.get(`${this.basePath}/:id`, [this.validateId, this.findById])
        application.post(`${this.basePath}`, [this.save])
        application.put(`${this.basePath}/:id`, [this.replace])
        application.del(`${this.basePath}/:id`, [this.delete])
    }
}

export const classroomRouter = new TeachersRouter()