// Get the required strategy and jwt extraction from library
const passport= require('passport');
const JWTStrategy= require('passport-jwt').Strategy;
const ExtractJWT= require('passport-jwt').ExtractJwt;
const Doctor= require('../models/doctor');


let options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "Hospital",
}

passport.use(new JWTStrategy(options,async function(jwtPayload, done){
    try {
        // fetching the doctor id from payload
        const doctorId = jwtPayload._id;
        const doctor = await Doctor.findById(doctorId);
        // if the doctor not found
        if (!doctor) {
            done(null, false);
        } else {
            // If present, return doctor/user
            done(null, doctor);
        }
    } catch (error) {
        done(error, false);
    }
}));

module.exports = passport;