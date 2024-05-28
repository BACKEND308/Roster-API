// models/RosterInfo.js
const mongoose = require('mongoose');

const RosterInfoSchema = new mongoose.Schema({
    flight: {
        FlightNumber: { type: String, required: true },
        PilotID: { type: Number, required: true },
        CrewIDs: { type: [Number], required: true },
        Date: { type: Date, required: true },
        PassengerIDs: { type: [String], required: true }
    },
    pilot: {
        PilotID: { type: Number, required: true },
        Age: { type: Number, required: true },
        Availability: { type: String, required: true },
        Gender: { type: String, required: true },
        Known_Languages: { type: [String], required: true },
        Nationality: { type: String, required: true },
        PilotName: { type: String, required: true },
        Pilot_Travel_Range: { type: String, required: true },
        Seniority: { type: String, required: true },
        Vehicle_Restriction: { type: String, required: true }
    },
    crew: [{
        CrewID: { type: Number, required: true },
        Age: { type: Number, required: true },
        Aircraft_Restrictions: { type: [String], required: true },
        Gender: { type: String, required: true },
        Known_Languages: { type: [String], required: true },
        MemberName: { type: String, required: true },
        Nationality: { type: String, required: true },
        Role: { type: String, required: true },
        Dishes: { type: [String] },
        Featured_Dish: { type: String }
    }],
    passengers: [{
        Passenger_id: { type: String, required: true },
        Flight_id: { type: String, required: true },
        Name: { type: String, required: true },
        Age: { type: Number, required: true },
        Gender: { type: String, required: true },
        Nationality: { type: String, required: true },
        Seat_type: { type: String, required: true },
        Seat_assigned: { type: String },
        AffiliatedPassengerIDs: { type: [String] }
    }]
}, { collection: 'roster_info' });

const RosterInfo = mongoose.model('RosterInfo', RosterInfoSchema);
module.exports = RosterInfo;
