const express= require('express');
const router= express.Router();
const doctorController= require('../controllers/doctorController');

//to create/register the doctor
router.post('/register', doctorController.register);

//for doctor login
router.post('/login', doctorController.login);

module.exports= router;