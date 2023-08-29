const mongoose = require('mongoose');

// create a schema for Patient
const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    phone:{
        type:Number,
        unique:true,
        required:true
    },
    doctor :{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
},{timestamps:true});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;