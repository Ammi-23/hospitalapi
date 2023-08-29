const Report= require('../models/report');

// to create a report
module.exports.createReport= async function(req,res){
    const {status}= req.body;
    const doctor= req.doctor._id;
    const patientId= req.params.id;

     // Create report using the inputs
    Report.create({
        doctor:doctor,
        status: status,
        patient : patientId,
    })
    .then((created_report)=>{
        //Send JSON response with status 200
        return res.status(200).json({
            success:true,
            message:"Report created successfully",
            data: {
                created_report: created_report
            }
        });
    })
    .catch((err) =>{
        //show status 500 , if any error occured
        res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    })
}

// to get all the reports of a patient 
module.exports.getAllReports = async function(req, res){
    try{
        const patientId = req.params.id;
        // Find all the reports of a patient with patientId
        const all_reports= await Report.find({patient:patientId}); 
        //Send JSON response with status 200
        return res.status(200).json({
            message: "Got all the report",
            data: {
                reports: all_reports,
            }
        })
    } catch (error) {
        //show status 500 , if any error occured
        res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
}

// Method to get all reports with requested status
module.exports.getReportByStatus = async function(req, res){
    try{
        const status = req.params.status;
        //// Find all the reports with status
        const reports= await Report.find({status:status}); 
        //Send JSON response with status 200
        return res.status(200).json({
            message: "Got all the report by status",
            data: {
                reports: reports,
            }
        })
    } catch (error) {
        //show status 500 , if any error occured
        res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
}