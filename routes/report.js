const express= require('express');
const router= express.Router();
const reportController= require('../controllers/reportController');


//to get all the reports of all the patients filtered by a specific status
router.get('/:status',  reportController.getReportByStatus);

module.exports= router;