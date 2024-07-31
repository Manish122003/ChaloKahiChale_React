const State = require('../Models/state_schema');
const City = require('../Models/city_schema');
const Hotel = require('../Models/hotel_schema');

// Fetch all hotels
exports.getAllHotelsController = async (req, res) => {
  try {
    // Fetch all hotels from the database
    const hotels = await Hotel.find();

    res.status(200).json({ message: "Hotels fetched successfully", hotels });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching hotels", error });
  }
};




// Fetch all cities
exports.getAllCitiesController = async (req, res) => {
    try {
      // Fetch all cities from the database
      const cities = await City.find();
  
      res.status(200).json({ message: "Cities fetched successfully", cities });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching cities", error });
    }
  };



  // Fetch all states
exports.getAllStatesController = async (req, res) => {
    try {
      // Fetch all states from the database
      const states = await State.find();
  
      res.status(200).json({ message: "States fetched successfully", states });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching states", error });
    }
  };
