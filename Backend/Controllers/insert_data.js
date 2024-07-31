
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

    const addedStates = await State.insertMany(states);
    res.status(201).json({ message: "States Added Successfully", addedStates });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding states", error });
  }
};

// Insert multiple cities
exports.insertCityDataController = async (req, res) => {
  try {
    const { cities } = req.body;

    if (!Array.isArray(cities)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    const stateNames = [...new Set(cities.map(city => city.state_name))];
    const states = await State.find({ state_name: { $in: stateNames } });

    // Ensure states are found
    if (states.length === 0) {
      return res.status(404).json({ message: "No matching states found" });
    }

    const stateMap = new Map(states.map(state => [state.state_name, state._id]));

    const cityDocuments = cities.map(city => ({
      city_name: city.city_name,
      city_description: city.city_description,
      hotel: [],
      state: stateMap.get(city.state_name) // Ensure this is assigned correctly
    }));

    const addedCities = await City.insertMany(cityDocuments);

    // Ensure cities are added
    if (addedCities.length === 0) {
      return res.status(500).json({ message: "No cities added" });
    }

    for (const state of states) {
      if (state._id) { // Check if _id is valid
        const citiesInState = addedCities.filter(city => city.state && city.state.toString() === state._id.toString());
        state.city.push(...citiesInState.map(city => city._id));
        await state.save();
      } else {
        console.warn(`State ${state.state_name} has an undefined ID.`);
      }
    }

    res.status(201).json({ message: "Cities Added Successfully", addedCities });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding cities", error });
  }
};


// Insert multiple hotels
exports.insertHotelDataController = async (req, res) => {
  try {
    const { hotels } = req.body;

    if (!Array.isArray(hotels)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    const cityNames = [...new Set(hotels.map(hotel => hotel.city_name))];
    const cities = await City.find({ city_name: { $in: cityNames } });

    // Ensure cities are found
    if (cities.length === 0) {
      return res.status(404).json({ message: "No matching cities found" });
    }

    const cityMap = new Map(cities.map(city => [city.city_name, city._id]));

    const hotelDocuments = hotels.map(hotel => ({
      hotel_name: hotel.hotel_name,
      hotel_review: hotel.hotel_review,
      hotel_price: hotel.hotel_price,
      city: cityMap.get(hotel.city_name) // Ensure this is assigned correctly
    }));

    const addedHotels = await Hotel.insertMany(hotelDocuments);

    // Ensure hotels are added
    if (addedHotels.length === 0) {
      return res.status(500).json({ message: "No hotels added" });
    }

    for (const city of cities) {
      if (city._id) { // Check if _id is valid
        const hotelsInCity = addedHotels.filter(hotel => hotel.city && hotel.city.toString() === city._id.toString());
        city.hotel.push(...hotelsInCity.map(hotel => hotel._id));
        await city.save();
      } else {
        console.warn(`City ${city.city_name} has an undefined ID.`);
      }
    }

    res.status(201).json({ message: "Hotels Added Successfully", addedHotels });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding hotels", error });
  }
};



// Fetch state data with populated cities and hotels
exports.getController = async (req, res) => {
  try {
    const stateData = await State.findOne({ state_name: "Gujarat" }).populate({
      path: 'city',
      populate: {
        path: 'hotel'
      }
    });
    res.status(200).json({ message: "State data fetched successfully", stateData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching state data", error });
  }
};
