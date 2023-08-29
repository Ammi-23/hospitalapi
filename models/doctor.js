const mongoose = require('mongoose');

// create a schema for doctor
const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique:true,
        required: true
    },
    password:{
        type:String,
        required:true
    }
    
},{
    timestamps: true
});



const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;