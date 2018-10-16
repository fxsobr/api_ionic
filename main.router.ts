import {Router} from "./common/router";
import * as restify from 'restify';

class MainRouter extends Router {
    applyRoutes(application: restify.Server) {
        application.get('/', (req, resp, next)=>{
            resp.json({
                users: '/users',
                teachers: '/teachers',
                classrooms: '/classroom',
                restaurants: '/restaurants',
                reviews: '/reviews'
            })
        })
    }
}

export const mainRouter = new MainRouter()