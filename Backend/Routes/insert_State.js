const express = require('express');
const router = express.Router();
const {
  insertStateDataController,
  insertCityDataController,
  insertHotelDataController,
  getController
} = require('../Controllers/insert_data');

router.post('/addstate', insertStateDataController);
router.post('/addcity', insertCityDataController);
router.post('/addhotel', insertHotelDataController);
router.get('/get', getController);

module.exports = router;
