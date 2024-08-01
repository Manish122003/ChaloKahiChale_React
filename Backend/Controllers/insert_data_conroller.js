const State = require('../Models/state_schema');
const City = require('../Models/city_schema');
const Hotel = require('../Models/hotel_schema');

// Insert multiple states
exports.insertStateDataController = async (req, res) => {
  try {
    const { states } = req.body;

    if (!Array.isArray(states)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    // Check for existing states
    const existingStates = await State.find({ state_name: { $in: states.map(state => state.state_name) } });
    const existingStateNames = existingStates.map(state => state.state_name);

    const newStates = states.filter(state => !existingStateNames.includes(state.state_name));

    if (newStates.length === 0) {
      return res.status(200).json({ message: "No new states to add" });
    }

    const addedStates = await State.insertMany(newStates);
    res.status(201).json({ message: "States Added Successfully", addedStates });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding states", error });
  }
};

// Insert multiple cities
// exports.insertCityDataController = async (req, res) => {
//   try {
//     const { cities } = req.body;

//     if (!Array.isArray(cities)) {
//       return res.status(400).json({ message: "Invalid data format" });
//     }

//     // Check for existing cities
//     const existingCities = await City.find({ city_name: { $in: cities.map(city => city.city_name) } });
//     const existingCityNames = existingCities.map(city => city.city_name);

//     const newCities = cities.filter(city => !existingCityNames.includes(city.city_name));

//     if (newCities.length === 0) {
//       return res.status(200).json({ message: "No new cities to add" });
//     }

//     const cityDocuments = newCities.map(city => ({
//       city_name: city.city_name,
//       city_description: city.city_description,
//       state: city.state // Add the state as a string field
//     }));

//     const addedCities = await City.insertMany(cityDocuments);

//     if (addedCities.length === 0) {
//       return res.status(500).json({ message: "No cities added" });
//     }

//     res.status(201).json({ message: "Cities Added Successfully", addedCities });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error adding cities", error });
//   }
// };
exports.insertCityDataController = async (req, res) => {
  try {
    const { cities } = req.body;

    if (!Array.isArray(cities)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    const existingCities = await City.find({ city_name: { $in: cities.map(city => city.city_name) } });
    const existingCityNames = existingCities.map(city => city.city_name);

    const newCities = cities.filter(city => !existingCityNames.includes(city.city_name));

    if (newCities.length === 0) {
      return res.status(200).json({ message: "No new cities to add" });
    }

    const cityDocuments = newCities.map(city => ({
      city_name: city.city_name,
      city_description: city.city_description,
      state: city.state,
      image_urls: city.image_urls || [] // Handle image_urls if they exist
    }));

    const addedCities = await City.insertMany(cityDocuments);

    if (addedCities.length === 0) {
      return res.status(500).json({ message: "No cities added" });
    }

    res.status(201).json({ message: "Cities Added Successfully", addedCities });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding cities", error });
  }
};


// Insert multiple hotels
// exports.insertHotelDataController = async (req, res) => {
//   try {
//     const { hotels } = req.body;

//     if (!Array.isArray(hotels)) {
//       return res.status(400).json({ message: "Invalid data format" });
//     }

//     // Check for existing hotels
//     const existingHotels = await Hotel.find({ hotel_name: { $in: hotels.map(hotel => hotel.hotel_name) } });
//     const existingHotelNames = existingHotels.map(hotel => hotel.hotel_name);

//     const newHotels = hotels.filter(hotel => !existingHotelNames.includes(hotel.hotel_name));

//     if (newHotels.length === 0) {
//       return res.status(200).json({ message: "No new hotels to add" });
//     }

//     const hotelDocuments = newHotels.map(hotel => ({
//       hotel_name: hotel.hotel_name,
//       hotel_review: hotel.hotel_review,
//       hotel_price: hotel.hotel_price,
//       city: hotel.city, // Add the city as a string field
//       state: hotel.state // Add the state as a string field

//     }));

//     const addedHotels = await Hotel.insertMany(hotelDocuments);

//     if (addedHotels.length === 0) {
//       return res.status(500).json({ message: "No hotels added" });
//     }

//     res.status(201).json({ message: "Hotels Added Successfully", addedHotels });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error adding hotels", error });
//   }
// };
exports.insertHotelDataController = async (req, res) => {
  try {
    const { hotels } = req.body;

    if (!Array.isArray(hotels)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    const existingHotels = await Hotel.find({ hotel_name: { $in: hotels.map(hotel => hotel.hotel_name) } });
    const existingHotelNames = existingHotels.map(hotel => hotel.hotel_name);

    const newHotels = hotels.filter(hotel => !existingHotelNames.includes(hotel.hotel_name));

    if (newHotels.length === 0) {
      return res.status(200).json({ message: "No new hotels to add" });
    }

    const hotelDocuments = newHotels.map(hotel => ({
      hotel_name: hotel.hotel_name,
      hotel_review: hotel.hotel_review,
      hotel_price: hotel.hotel_price,
      city: hotel.city,
      state: hotel.state,
      image_urls: hotel.image_urls || [] // Handle image_urls if they exist
    }));

    const addedHotels = await Hotel.insertMany(hotelDocuments);

    if (addedHotels.length === 0) {
      return res.status(500).json({ message: "No hotels added" });
    }

    res.status(201).json({ message: "Hotels Added Successfully", addedHotels });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding hotels", error });
  }
};


// Fetch state data
// exports.getController = async (req, res) => {
//   try {
//     const { state_name } = req.query;

//     // Fetch states with city and hotel data
//     const stateData = await State.findOne({ state_name });

//     if (!stateData) {
//       return res.status(404).json({ message: "State not found" });
//     }

//     // Fetch cities and hotels related to the state
//     const cities = await City.find({ state: state_name });
//     const hotels = await Hotel.find({ state: state_name });

//     res.status(200).json({
//       message: "State data fetched successfully",
//       stateData,
//       cities,
//       hotels
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error fetching state data", error });
//   }
// };
exports.getController = async (req, res) => {
  try {
    const { state_name } = req.query;

    if (!state_name) {
      return res.status(400).json({ message: "State name query parameter is required" });
    }

    const stateData = await State.findOne({ state_name });

    if (!stateData) {
      return res.status(404).json({ message: "State not found" });
    }

    const cities = await City.find({ state: state_name });
    const hotels = await Hotel.find({ state: state_name });

    res.status(200).json({
      message: "State data fetched successfully",
      stateData,
      cities,
      hotels
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching state data", error });
  }
};
