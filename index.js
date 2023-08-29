const express= require('express');

// database connection
const db= require('./config/mongoose');
const port= 5500;// Defining the port of the application

// starting the app
const app= express();

// Initialising the passport JWT authentication
const passport= require('passport');
const passportJWT= require('./config/passport-jwt-strategy');

app.use(express.urlencoded());
app.use(express.json());

//use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error is connecting the server:${err}`);
        return
    }
    console.log(`Server is running on port:${port}`)
});