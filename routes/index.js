const express= require('express');
const router= express.Router();

//Defining Routes for doctors, patients and reports
router.use('/doctor', require('./doctor'));
router.use('/patient', require('./patient'));
router.use('/report',require('./report'));

module.exports= router;