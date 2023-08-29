# hospitalapi
Design the server side for a hospital.
App to use by doctor to login,check the detail status of the patient and get all the reports.

- Created Schema for the doctors,patient and report.
- Establish connection with mongodb.
- create controllers- setup path in routes

Routes
- /doctor/register -> Register doctor with the required inputs
- /doctor/login -> Login doctor by generating jwt token

- /patient/register -> Register patient with the required inputs
- /patient/:id/create_report -> Create report for a patient
- /patient/:id/all_reports -> List all the reports of a patient
- /report/:status -> List all the reports of all the patients filtered by a specific status