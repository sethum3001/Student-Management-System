const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const programSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    duration: {
        type:String,
        required: true
    },

    cost: {
        type: String,
        required: true
    }
})

const Program = mongoose.model("Program",programSchema);
module.exports = Program;