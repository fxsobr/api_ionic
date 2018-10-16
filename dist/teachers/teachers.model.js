"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 80
    },
    birthDate: {
        type: Date,
        required: true
    },
    curriculum: {
        type: String,
        required: true,
        maxlength: 500
    },
    status: {
        type: Boolean,
        required: true
    },
    imagem: {
        type: String,
        required: false
    }
});
exports.Teacher = mongoose.model('Teacher', teacherSchema);
//# sourceMappingURL=teachers.model.js.map