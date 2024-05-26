const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectMongo = require('./db/connectMongo'); // Ensure this properly sets up and exports the MongoDB connection.

const rosterRoutes = require('./routes/roster.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); //for parsing application/json

//MongoDB connection
connectMongo();

//connect to routes
app.use('/api/roster', rosterRoutes);

//Define a simple route for testing, ping with 1
app.get('/', (req, res) => {
    res.send('Hello World! This is the roster information API.');
});

//Set the port and start the server
const port=process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});