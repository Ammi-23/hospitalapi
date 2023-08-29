const express= require('express');
const router= express.Router();
const patientController= require('../controllers/patientController');
const reportController= require('../controllers/reportController');
const {verifyToken}= require('../config/middleware');

//to create/register patient
router.post('/register',verifyToken, patientController.createPatient);
//to create report
router.post('/:id/create_report',verifyToken, reportController.createReport);
//to get all the reports of a patient
router.get('/:id/all_reports',  reportController.getAllReports);

module.exports= router;
