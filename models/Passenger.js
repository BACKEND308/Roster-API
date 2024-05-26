const mongoose= require('mongoose');

const PassengerSchema = new mongoose.Schema({

  passenger_id : {type: String, required: true, unique:true},
  Flight_ID : {type: String, required: true, default: '-'},
  Name : {type: String, required: true, default: '-'},
  Age : {type: Number, required: true},
  Gender : {type: String, required: true, enum: ['Male', 'Female']},
  Nationaliy: {type: String, required: true, default: 'None'},
  Seat_type: {type: String, enum:['business', 'economy', '']},
  Seat_assigned: {type: String, default: null},
  AffiliatedPassengerIDs: {type: [String], default: []},
  Parent_info: {
    Parent_ID: {type: String},
    Parent_Seat: {type: String}
  }
});

const Passenger = mongoose.model('Passenger', PassengerSchema, 'passenger_info');
module.exports= Passenger;