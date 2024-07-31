// const express = require('express');
// const router = express.Router();
// const {
//   getAllHotelsController
// } = require('../Controllers/fetch_data_controller');

// router.get('/gethotels', getAllHotelsController);

// module.exports = router;


const express = require('express');
const router = express.Router();
const {
  getAllHotelsController,
  getAllCitiesController,
  getAllStatesController
} = require('../Controllers/fetch_data_controller');

// Route to fetch all hotels
router.get('/gethotels', getAllHotelsController);

// Route to fetch all cities
router.get('/getcities', getAllCitiesController);

// Route to fetch all states
router.get('/getstates', getAllStatesController);

module.exports = router;
