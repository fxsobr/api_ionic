"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../common/model-router");
const classroom_model_1 = require("./classroom.model");
class TeachersRouter extends model_router_1.ModelRouter {
    constructor() {
        super(classroom_model_1.Classroom);
        this.findById = (req, resp, next) => {
            this.model.findById(req.params.id)
                .populate('teacher', 'name')
                .then(this.render(resp, next)).catch(next);
        };
    }
    applyRoutes(application) {
        application.get(`${this.basePath}`, this.findAll);
        application.get(`${this.basePath}/:id`, [this.validateId, this.findById]);
        application.post(`${this.basePath}`, [this.save]);
        application.put(`${this.basePath}/:id`, [this.replace]);
        application.del(`${this.basePath}/:id`, [this.delete]);
    }
}
exports.classroomRouter = new TeachersRouter();
//# sourceMappingURL=classroom.router.js.map