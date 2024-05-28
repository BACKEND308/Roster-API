const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectMongo = require('./db/connectMongo');
const sqlDb = require('./db/sqlDb');

const rosterRoutes = require('./routes/roster.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// MongoDB connection
connectMongo();

// SQL connection
sqlDb.getConnection()
  .then(() => console.log('Connected to MySQL database'))
  .catch(err => console.error('Failed to connect to MySQL database:', err));

// Connect to routes
app.use('/api/roster', rosterRoutes);

// Define a simple route for testing
app.get('/', (req, res) => {
    res.send('Hello World! This is the roster information API.');
});

// Set the port and start the server
const port = process.env.PORT || 5005;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
