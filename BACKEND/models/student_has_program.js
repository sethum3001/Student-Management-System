const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const student_has_programSchema = new Schema({
    stuId:{
        type:String,
        required:true
    },

    prgId:{
        type:String,
        required:true
    },

    regDate:{
        type:Date,
        required:true
    }
});

const student_has_program = mongoose.model("student_has_program",student_has_programSchema);
module.exports = student_has_program;