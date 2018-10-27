var express = require('express');
var router = express.Router();
var obj = require('../db/data');


router.get('/', (req, res) => {
    res.send(obj);
});

router.post('/', (req, res) => {
    objGet = {
        Location: req.body.Location,
        DangerLattitude: req.body.Lattitude,
        DangerLongitude: req.body.Longitude,
        TimeStamp: req.body.TimeStamp,
        WaterArea: req.body.Area,
        CriticalFactor: req.body.CriticalFactor,
        Alert:req.body.Alert
    }
    console.log(obj);
    obj.arr.push(objGet);
    res.status(200).send("Data Added Successfully in DB" + obj); 
});

module.exports = router;