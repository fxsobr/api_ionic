"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const users_router_1 = require("./users/users.router");
const restaurants_router_1 = require("./restaurants/restaurants.router");
const reviews_router_1 = require("./reviews/reviews.router");
const main_router_1 = require("./main.router");
const teachers_router_1 = require("./teachers/teachers.router");
const classroom_router_1 = require("./classrooms/classroom.router");
const server = new server_1.Server();
server.bootstrap([main_router_1.mainRouter,
    users_router_1.usersRouter,
    teachers_router_1.teachersRouter,
    classroom_router_1.classroomRouter,
    restaurants_router_1.restaurantsRouter,
    reviews_router_1.reviewsRouter]).then(server => {
    console.log("O Servidor está ouvindo em: ", server.application.address());
}).catch(error => {
    console.log("Erro ao iniciar o Servidor");
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=main.js.map