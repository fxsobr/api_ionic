"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./common/router");
class MainRouter extends router_1.Router {
    applyRoutes(application) {
        application.get('/', (req, resp, next) => {
            resp.json({
                users: '/users',
                teachers: '/teachers',
                classrooms: '/classroom',
                restaurants: '/restaurants',
                reviews: '/reviews'
            });
        });
    }
}
exports.mainRouter = new MainRouter();
//# sourceMappingURL=main.router.js.map