var express = require('express');
var router = express.Router();

var elevationImages = require('./elevationImages')
var latestSatelliteImage = require('./latestSatelliteImage')
var alert = require('./alert')



router.use('/elevationImages', elevationImages);
router.use('/latestSatelliteImage', latestSatelliteImage);
router.use('/alert',alert);

module.exports = router;