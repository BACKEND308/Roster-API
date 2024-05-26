const mongoose = require('mongoose');

const PilotSchema = new mongoose.Schema({
    PilotID: {type: Number, required: true, unique: true, default: '-'},
    Age: {type: Number, required: true},
    Availability: {type: String, required: true, default: '-'},
    Gender: {type: String, required: true, enum:['Male', 'Female']},
    Known_Languages: {type: [String], required: true, default: []},
    LicenseNumber: {type: Number, required: true},
    Nationality: {type: String, required: true, default: '-'},
    PilotName: {type: String, required: true, default: '-'},
    Pilot_Travel_Range: {type: String, required: true, enum:['Short-haul', 'Long-haul']},
    Seniority: {type: String, required: true, enum:['senior', 'junior', 'trainee']},
    Vehicle_Restriction: {type: String, required: true, default: '-'}
    }, {collection: 'pilots'});

const Pilot = mongoose.model('Pilot', PilotSchema);
module.exports= Pilot;