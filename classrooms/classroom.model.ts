import * as mongoose from 'mongoose';
import {Teacher} from "../teachers/teachers.model";

export interface Classroom extends mongoose.Document {
    name: string,
    ementa:string
    beginDate: Date,
    endDate: Date,
    teacher: mongoose.Types.ObjectId | Teacher
}

const classroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30
    },
    ementa: {
        type: String,
        required: true,
        maxlength: 30
    },
    beginDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required:true
    }
})


export const Classroom = mongoose.model<Classroom>('Classroom', classroomSchema)