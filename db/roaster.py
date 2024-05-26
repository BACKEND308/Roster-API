from connect import connectDB,connect_mysql, fetch_data_from_mongodb, create_table_and_insert_data
import random

def insert_roster_entry(db, roster_entry_data):
    """Inserts a single roster entry document into the MongoDB collection."""
    roster_entry_collection = db.roster_entry
    roster_entry_collection.insert_one(roster_entry_data)
    
def main():
    db = connectDB()

#roster_entry_data = [
#        {"RosterID": 1, "PilotID": 1, "CrewID": 1, "FlightNumber": "FL001", "Date": "2024-05-01"},
#        {"RosterID": 2, "PilotID": 2, "CrewID": 2, "FlightNumber": "FL001", "Date": "2024-05-02"},
#        {"RosterID": 3, "PilotID": 3, "CrewID": 3, "FlightNumber": "FL001", "Date": "2024-05-03"},
#        {"RosterID": 4, "PilotID": 4, "CrewID": 4, "FlightNumber": "FL001", "Date": "2024-05-04"},
#        {"RosterID": 5, "PilotID": 5, "CrewID": 5, "FlightNumber": "FL001", "Date": "2024-05-05"},
#        {"RosterID": 6, "PilotID": 6, "CrewID": 6, "FlightNumber": "FL001", "Date": "2024-05-06"},
#        {"RosterID": 7, "PilotID": 7, "CrewID": 7, "FlightNumber": "FL001", "Date": "2024-05-07"},
#        {"RosterID": 8, "PilotID": 8, "CrewID": 8, "FlightNumber": "FL001", "Date": "2024-05-08"},
#        {"RosterID": 9, "PilotID": 9, "CrewID": 9, "FlightNumber": "FL001", "Date": "2024-05-09"},
#        {"RosterID": 10, "PilotID": 10, "CrewID": 10, "FlightNumber": "FL001", "Date": "2024-05-10"}
#    ]

#    for entry_data in roster_entry_data:
#        insert_roster_entry(db, entry_data)

if __name__ == '__main__':
    main()