const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');

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

// hash the password
doctorSchema.methods.generateHash = function(password) {
    try {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    } catch (error) {
        console.log('Error***', error)
    }
};
  
// checking if password is valid
doctorSchema.methods.validPassword = function(password) {  
    return bcrypt.compareSync(password, this.password);
};

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;