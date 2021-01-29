const express=require('express');
const router=express.Router();
const Student=require('../models/Student');

// Get all students
router.get('/',async (req,res)=>{
     
    try{
        const students=await Student.find();
        res.json(students);
    }catch(err){
        res.json({message:err});
    }
});

// Get specific student
router.get('/:studentId',async (req,res)=>{
       
    try{
        const student=await Student.findById(req.params.studentId);
        res.json(student);
    }catch(err){
        res.json({message:err});
    }
});
// Submit a student
router.post('/',async (req,res)=>{
    const student=new Student({
        name: req.body.name,
        branch: req.body.branch,
        rollno: req.body.rollno
    });
     try {
         const savedStudent=await student.save();
         res.json(savedStudent);
         
     } catch (error) {
         res.json({message:error});
     }
});

// Delete specific Student
router.delete('/:studentId',async (req,res)=>{
       
    try{
        const deletedStudent=await Student.remove({_id : req.params.studentId});
        res.json(deletedStudent);
    }catch(err){
        res.json({message:err});
    }
});

// Update a Student
router.patch('/:studentId',async (req,res)=>{

    try{
        const updatedStudent=await Student.updateOne(
            {_id : req.params.studentId},
            {$set:{name: req.body.name}}
            );

        res.json(updatedStudent);
    }catch(err){
        res.json({message:err});
    }

})
module.exports=router;