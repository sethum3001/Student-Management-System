const router = require("express").Router();
let Program = require("../models/Program");


//saving a new program
router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const duration = req.body.duration;
    const cost = req.body.cost;

    const newProgram = new Program({
        name,
        duration,
        cost
    })

    newProgram.save().then(()=>{
        res.json("Program successfully added");
    }).catch((err)=>{
        res.json("Unsuccessfull adding");
        console.log(err.message);
    })
})

//updating a program
router.route("/update/:id").post((req,res)=>{

    let prgId = req.params.id;
    const name = req.body.name;
    const duration = req.body.duration;
    const cost = req.body.cost;

    const updateProgram = {
        name,
        duration,
        cost
    }

    Program.findByIdAndUpdate(prgId,updateProgram).then(()=>{
        res.json("Program successfully updated");
    }).catch((err)=>{
        res.json("Unsuccessfull update");
        console.log(err.message);
    });

})

//deleting a program
router.route("/delete/:id").post((req,res)=>{

    let prgId = req.params.id;
    Program.findByIdAndDelete(prgId).then(()=>{
        res.json("Program successfully deleted");
    }).catch((err)=>{
        res.json("Unsuccessfull delete");
        console.log(err.message);
    })

});

//retrieving all the programs
router.route("/").get((req,res)=>{
    Program.find().then((programs)=>{
        res.json(programs);
    }).catch((err)=>{
        res.json("Cannot retrieve");
        console.log(err.message);
    })
});

//search with the programId
router.route("/search/:id").get((req,res)=>{

    let prgId = req.params.id;

    Program.findById(prgId).then((program)=>{
        res.json(program);
    }).catch((err)=>{
        res.json("Program cannot be found");
        console.log(err.message);
    });

})

module.exports = router;