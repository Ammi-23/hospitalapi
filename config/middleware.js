const jwt = require('jsonwebtoken');
const Doctor = require("../models/doctor");


exports.verifyToken = async function(req, res, next){
    let token;
    // Verifying Bear Token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
      req.token = token;
    }
  
    try {
        const decoded = jwt.verify(token, 'Hospital'); //Decode Token
        req.doctor = await Doctor.findById(decoded.id); // Find Doctor by ID 
        next();


    } catch (err) { 
      return res.status(401).json({
        success: false,
        message: "Unauthroized access"
      });
    }
  };