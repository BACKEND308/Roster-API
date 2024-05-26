const express = require('express');
// const Roster = require('../models/Roster'); // Import the updated CabinCrew model
const PassengerInfo = require('../models/Passenger');
const CabinCrew = require('../models/CabinCrew');
const Pilot = require('../models/Pilot');

const router = express.Router();

//GET route combining all the information
router.get('/all', async (req, res) => {
    try {
        const passengerInfo = await PassengerInfo.find();
        const cabinCrew = await CabinCrew.find();
        const pilots = await Pilot.find();

        res.json({passengerInfo, cabinCrew, pilots});
    } catch (err) {
        console.error('Error retrieving roster entries:', err); // Log the error
        res.status(500).json({ message: err.message });
    }
});

// //GET route combining all the information in a specific flight
// router.get('/flight/:id', async (req, res) => {
//     try {
//         const passengerInfo = await PassengerInfo.find({Flight_ID: req.params.id});
//         const cabinCrew = await CabinCrew.find({Flight_ID: req.params.id});
//         const pilots = await Pilot.find({Flight_ID: req.params.id});

//         res.json({passengerInfo, cabinCrew, pilots});
//     } catch (err) {
//         console.error('Error retrieving roster entries:', err); // Log the error
//         res.status(500).json({ message: err.message });
//     }
// });

// //POST route to add FLight_ID attribute to a pilot
// router.post('/pilot/:id', async (req, res) => {
//     try {
//         const pilot = await Pilot.findById(req.params.id);
//         if (!pilot) return res.status(404).json({ message: 'Pilot not found' });

//         pilot.Flight_ID = req.body.Flight_ID;
//         const updatedPilot = await pilot.save();
//         res.json(updatedPilot);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

module.exports = router; // Export the router for use in the main app file