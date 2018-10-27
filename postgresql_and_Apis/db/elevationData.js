const Sequelize = require('sequelize');
const db = new Sequelize('projectnoah', 'postgres', 'qwerty', {
    host: 'localhost',
    dialect: 'postgres'
});

const ElevationData = db.define('ElevationData', {
    Location: {
        type: Sequelize.TEXT,
        primaryKey: true
    },
    Lattitude: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    Longitude: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    Resolution: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    SaferLattitude: {
        type: Sequelize.DataTypes.FLOAT
    },
    SaferLongitude: {
        type: Sequelize.DataTypes.FLOAT
    },
    Population: {
        type: Sequelize.DataTypes.FLOAT
    },
    Area: {
        type: Sequelize.DataTypes.FLOAT
    },
    Density: {
        type: Sequelize.DataTypes.FLOAT
    }
})

db.sync().then(() => console.log("Database Ready"))

function getDataLocation(Arr, callback) {
    // console.log(Arr);
    var locationArr=[];
    Arr.forEach(element => {
        locationArr.push(element.Location);
    });
    console.log(locationArr);
    ElevationData.findAll({ where: { Location: locationArr } }).then(data => {
        // console.log(data);    
        callback(null,data);            
    });    
}

function getData(callback) {
    arr = []
    ElevationData.all().then(data => {
        data.forEach(element => {
            // console.log(element.toJSON()); 
            arr.push(element.toJSON())
        });
        // return arr;        
        //dont forget it to convert it to tojson before sending
        callback(null, { data: arr });
    })

    //data contains all the data as an array object
}

function InsertData(obj, callback) {
    ElevationData.create(obj).then(data => {
        callback(null, data.toJSON())
        // console.log(data.toJSON());
    });
}

// getData((err,obj)=>{
//     console.log(obj);    
// });


module.exports = {
    getData,
    InsertData,
    getDataLocation
}

