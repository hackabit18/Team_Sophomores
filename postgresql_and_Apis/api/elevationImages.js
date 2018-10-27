var express = require('express');
var router = express.Router();
var elevationData = require('../db/elevationData');

router.get('/', (req, res) => {    
    elevationData.getData((err,data)=>{
        res.send(data);
    })    
});


router.post('/', (req, res) => {
    obj = {
        Location: req.body.Location,
        Lattitude: req.body.Lattitude,
        Longitude: req.body.Longitude,
        Resolution: req.body.Resolution, 
        SaferLattitude: req.body.SaferLattitude,
        SaferLongitude: req.body.SaferLongitude,
        Population: req.body.Population,
        Area: req.body.Area,
        Density: req.body.Density         
    }
    console.log(obj);
    
    elevationData.InsertData(obj,(err,success)=>{
        res.status(200).send("Data Added Successfully in DB " + success);
    });
});

module.exports = router;