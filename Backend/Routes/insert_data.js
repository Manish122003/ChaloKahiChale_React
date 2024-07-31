const express = require('express');
const router = express.Router();
const {
  insertStateDataController,
  insertCityDataController,
  insertHotelDataController,
} = require('../Controllers/insert_data_conroller');

router.post('/addstate', insertStateDataController);
router.post('/addcity', insertCityDataController);
router.post('/addhotel', insertHotelDataController);

module.exports = router;
