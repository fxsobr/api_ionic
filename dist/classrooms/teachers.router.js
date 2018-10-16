"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../common/model-router");
const classroom_model_1 = require("./classroom.model");
class TeachersRouter extends model_router_1.ModelRouter {
    constructor() {
        super(classroom_model_1.Teacher);
    }
    applyRoutes(application) {
        application.get(`${this.basePath}`, this.findAll);
        application.get(`${this.basePath}/:id`, [this.validateId, this.findById]);
        application.post(`${this.basePath}`, [this.save]);
        application.put(`${this.basePath}/:id`, [this.replace]);
        application.del(`${this.basePath}/:id`, [this.delete]);
    }
}
exports.teachersRouter = new TeachersRouter();
//# sourceMappingURL=teachers.router.js.map