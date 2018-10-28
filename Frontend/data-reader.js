const excelToJson = require('convert-excel-to-json');

var fs = require('fs');
var fileName = './map-points.json';
var file = require(fileName);

const result = excelToJson({
    sourceFile: './assets/kerala-coordinates.xlsx',
    range: 'E1:F5',
    columnToKey: {
        E: 'lat',
        F: 'lng'
    }
});

file.safezones = result.Coordinates;

fs.writeFile(fileName, JSON.stringify(file), function (err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file));
    console.log('writing to ' + fileName);
});

console.log(result);