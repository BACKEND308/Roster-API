const express = require('express');

const sqlDb = require('../db/sqlDb');
const Roster = require('../models/Roster');
const RosterInfo = require('../models/RosterInfo');
const PassengerInfo = require('../models/Passenger');
const CabinCrew = require('../models/CabinCrew');
const Pilot = require('../models/Pilot');


const router = express.Router();

// Save roster in NoSQL database
router.post('/save-nosql', async (req, res) => {
    try {
        const rosterInfo = new RosterInfo(req.body.flightData);
        await rosterInfo.save();
        res.status(201).json({ message: 'Roster saved in NoSQL database' });
    } catch (err) {
        console.error('Error saving roster to NoSQL database:', err);
        res.status(500).json({ message: err.message });
    }
});
  
  // Save roster in SQL database
router.post('/save-sql', async (req, res) => {
    const { flightData } = req.body;
    try {
      const query = 'INSERT INTO rosters (flight_data) VALUES (?)';
      await sqlDb.query(query, [JSON.stringify(flightData)]);
      res.status(201).json({ message: 'Roster saved in SQL database' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// GET route combining all the information for a specific flight
router.get('/flight/:flightNumber', async (req, res) => {
    try {
        // Find the roster entry by flight number
        const rosterEntry = await Roster.findOne({ FlightNumber: req.params.flightNumber });

        if (!rosterEntry) {
            return res.status(404).json({ message: 'Roster entry not found' });
        }

        // Fetch the pilot information
        const pilot = await Pilot.findOne({ PilotID: rosterEntry.PilotID });

        // Fetch the cabin crew information
        const crew = await CabinCrew.find({ CrewID: { $in: rosterEntry.CrewIDs } });

        // Fetch the passenger information
        const passengers = await PassengerInfo.find({ passenger_id: { $in: rosterEntry.PassengerIDs } });

        res.json({ flight: rosterEntry, pilot, crew, passengers });
    } catch (err) {
        console.error('Error retrieving roster entry:', err);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
