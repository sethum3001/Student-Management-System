const router = require("express").Router();
let student_has_program = require("../models/student_has_program");

//register a student with a particular program
router.route("/add").post((req,res)=>{

    const stuId= req.body.stuId;
    const prgId = req.body.prgId;
    const regDate = Date();

    const new_studet_has_program = new student_has_program({
        stuId,
        prgId,
        regDate
    })

    new_studet_has_program.save().then(()=>{
        res.json(stuId + "is successfully registered to "+ prgId);
    }).catch((err)=>{
        res.json("Registration is unsuccessfull");
        console.log(err.message);
    })
})

module.exports = router;