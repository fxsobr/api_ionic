import * as mongoose from 'mongoose';

export interface Teacher extends mongoose.Document {
    date: Date,
    rating: number,
    comments: string
}

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
        required:true
    },
    imagem: {
        type: String,
        required: false
    }
})


export const Teacher = mongoose.model<Teacher>('Teacher', teacherSchema)