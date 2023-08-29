const Patient= require('../models/patient');

//to create/register the patient
module.exports.createPatient= async function(req,res){
    const doctor= req.doctor._id;
    const {name, age, phone}= req.body;
    //find the patient with phone number
    const phoneNumberExists= await Patient.findOne({phone: phone});
    if (phoneNumberExists) {
        //if exist, show the message with the patient info
        return res.status(400).json({
            message: "Patient already exists with phone number",
            body: phoneNumberExists
        });
    }
    //create a patient using the inputs
    Patient.create({
        name: name,
        age: age,
        phone: phone,
        doctor: doctor
    })
    .then((newPatient)=> {
        newPatient.save();
        // Send JSON response with status 200
        return res.status(200).json({
            success:true,
            message: "Patient created successfully",
            body: newPatient
        });
    })   
    .catch((err)=> {
        //show status 500 , if any error occured
        res.status(500).json({
            success:false,
            message:"Error while creating a patient ,Internal server error"
        });
    });
}

