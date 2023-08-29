const Doctor= require('../models/doctor');
const jwt= require('jsonwebtoken');//to generate jwt tokens for user 
const bcrypt= require('bcryptjs');

//To register or create Doctor
module.exports.register= async function(req,res){
    const {name, email,password}= req.body;
    // check if the doctor already exists with email
    const doctorWithEmail = await Doctor.exists({email: email});
    //if exist,send the message
    if (doctorWithEmail) {
        return res.status(400).json({
            message: "Doctor email Id already exists"
        });
    }
    //else create Doctor using the inputs 
    Doctor.create({
        name: name,
        email: email,
        password: password
    })
    .then((newDoctor)=> {
        newDoctor.password= newDoctor.generateHash(password);
        newDoctor.save();
        // Send JSON response with status 200
        return res.status(200).json({
            success:true,
            message: "Doctor Registered Successfully"
        });
    })   
    .catch((err)=> {
        //show status 500 , if any error occured
        res.status(500).json({
            success:false,
            message:"Could not create a doctor,Internal server error"
        });
    });
}

// for doctor login
module.exports.login= async function(req,res){
    try{
        const {email,password} = req.body;
        //find the user with email
        const user= await Doctor.findOne({email: email});
        
        //if user not found or password doesnot match
        let isEqual=user.validPassword(password);
        if(!user || !isEqual){        
            return res.status(422).json({
                message:'Invalid Username or Password'
            })
        }
        //if match, create a token 
        const token=jwt.sign({id:user._id}, 'Hospital', {expiresIn: 1000000 });
        return res.status(200).json({
            message:"Doctor logged in successfully",
            data: {
                token: token
            }
        }); 

    }catch (err) {
      //show status 500 , if any error occured
        res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
}
