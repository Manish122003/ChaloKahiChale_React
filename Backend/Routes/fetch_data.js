const express = require('express');
const router = express.Router();
const {
  getAllHotelsController,
  getAllCitiesController,
  getAllStatesController,
  // getHotelsByStateAndCityController,
  getCitiesByStateController,
  getHotelsByMinRatingController,
  getHotelsByPriceRangeController,
  // getHotelsByStateCityAndPriceController,
  getHotelsByStateCityAndRatingAndPriceController
} = require('../Controllers/fetch_data_controller');

// Route to fetch all hotels
router.get('/gethotels', getAllHotelsController);

// Route to fetch all cities
router.get('/getcities', getAllCitiesController);

// Route to fetch all states
router.get('/getstates', getAllStatesController);

// Route to fetch hotels by state and city
// router.get('/gethotelsbystateandcity', getHotelsByStateAndCityController);

// Route to fetch cities by state
router.get('/getcitiesbystate', getCitiesByStateController);

// Route to fetch hotels by minimum rating
router.get('/gethotelsbyminrating', getHotelsByMinRatingController);

// Route to fetch hotels by price range
router.get('/gethotelsbypricerange', getHotelsByPriceRangeController);

// Route to fetch hotels by state, city, and price range
// router.get('/gethotelsbystatecityandprice', getHotelsByStateCityAndPriceController);

// Route to fetch hotels by state, city, and optional rating and price range
router.get('/gethotelsbystatecityratingandprice', getHotelsByStateCityAndRatingAndPriceController);


module.exports = router;
