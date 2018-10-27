const Sequelize = require('sequelize');
const db = new Sequelize('projectnoah', 'postgres', 'qwerty', {
    host: 'localhost',
    dialect: 'postgres'
});

const SatelliteData = db.define('SatelliteData', {
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NELattitude: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    NELongitude: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    NWLattitude: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    NWLongitude: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    SELattitude: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    SELongitude: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    SWLattitude: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    SWLongitude: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    ImageName: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false
    },
    TimeStamp: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false
    }
})

db.sync().then(() => console.log("Database Ready"))

function getData(callback) {
    arr = []
    SatelliteData.all().then(data => {
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

function InsertData(obj,callback) {
    SatelliteData.create(obj).then(data => {
        callback(null, data.toJSON())
        // console.log(data.toJSON());
    });
}

// getData();

module.exports = {
    getData,
    InsertData
}

