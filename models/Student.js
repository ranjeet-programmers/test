const mongoose=require('mongoose');


const StudentSchemea=mongoose.Schema({
    name : {
        type : String,
        required :true
    },
    branch : {
        type : String,
        required : true
    },
    rollno : Number
});


module.exports=mongoose.model('Student',StudentSchemea);