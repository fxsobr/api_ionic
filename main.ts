import {Server} from './server/server'
import {usersRouter} from "./users/users.router";
import {restaurantsRouter} from "./restaurants/restaurants.router";
import {reviewsRouter} from "./reviews/reviews.router";
import {mainRouter} from "./main.router";
import {teachersRouter} from "./teachers/teachers.router";
import {classroomRouter} from "./classrooms/classroom.router";

const server = new Server();
server.bootstrap(
    [mainRouter,
            usersRouter,
            teachersRouter,
            classroomRouter,
            restaurantsRouter,
            reviewsRouter]).then(server =>{
    console.log("O Servidor está ouvindo em: ", server.application.address())
}).catch(error => {
    console.log("Erro ao iniciar o Servidor");
    console.error(error);
    process.exit(1)
});