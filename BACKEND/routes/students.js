const router = require("express").Router();
let Student = require("../models/student");

//saving a new student
router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const address = req.body.address;
    const contact = Number(req.body.contact);

    const newStudent = new Student({

        name,
        address,
        contact
        
    })

    newStudent.save().then(()=>{
        res.json("Student successfully added")
    }).catch((err)=>{
        res.json("Unsuccessfull adding");
        console.log(err.message);
    })
});

//updating a student
router.route("/update/:id").post((req,res)=>{
    let userId = req.params.id;
    const name = req.body.name;
    const address = req.body.address;
    const contact = req.body.contact;

    const updateStudent = {
        name,
        address,
        contact
    }

    Student.findByIdAndUpdate(userId, updateStudent).then(()=>{
        res.json("Student successfully updated");
    }).catch((err)=>{
        res.json("Unsuccessfull update");
        console.log(err.message);
    })

    
})

//deleting a student
router.route("/delete/:id").post((req,res)=>{
    let userId = req.params.id;

    Student.findByIdAndDelete(userId).then(()=>{
        res.json("Student successfully deleted");
    }).catch((err)=>{
        res.json("Unsuccessfull delete");
        console.log(err.message);
    });
})

//retrieving all the students
router.route("/").get((req,res)=>{

    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        res.json("Cannot retrieve");
        console.log(err.message);
    })
})

//search with the studentId
router.route("/search/:id").get((req,res)=>{

    let stuId = req.params.id;

    Student.findById(stuId).then((student)=>{
        res.json(student);
    }).catch((err)=>{
        res.json("Student cannot be found");
        console.log(err.message);
    });

})


module.exports = router;