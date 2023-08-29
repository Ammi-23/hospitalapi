//require the library
const mongoose= require('mongoose');
//connect to the database
mongoose.connect('mongodb+srv://ammibishwal:Lock&key23@hospital-api.rqs3a2j.mongodb.net/?retryWrites=true&w=majority');
let db = mongoose.connection;

//if error in connecting db
db.on('error', console.error.bind(console, "Error connecting to mongodb"));
//message when successfully connected
db.once('open', function(){
    console.log("Successfully connected to database :: mongodb");
});

module.exports = db;