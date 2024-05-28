const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const RosterSQL = sequelize.define('Roster', {
  FlightNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PilotID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  CrewIDs: {
    type: DataTypes.STRING, // Store as JSON string
    allowNull: false,
  },
  Date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  PassengerIDs: {
    type: DataTypes.STRING, // Store as JSON string
    allowNull: false,
  },
}, {
  tableName: 'rosters',
  timestamps: false,
});

module.exports = RosterSQL;
