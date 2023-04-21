const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    
});

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("Mongodb Connnection success!");
});

app.listen(PORT, () =>{
    console.log(`Server is up and running on port ${PORT}`)
});

const studentRouter = require("./routes/students.js");
app.use("/student", studentRouter);

const programRouter = require("./routes/programs.js");
app.use("/program", programRouter);

const student_has_program_Router = require("./routes/student_has_program.js");
app.use("/student_has_program", student_has_program_Router);