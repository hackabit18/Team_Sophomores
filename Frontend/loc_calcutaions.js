// arr = [{ "Location": "Alleppey", "Lattitude": 9.4981, "Longitude": 76.3388, "Resolution": 2, "SaferLattitude": 9.4981, "SaferLongitude": 76.3365, "Population": 174632, "Area": 46.18, "Density": 3781.55045474231, "createdAt": "2018-10-27T06:31:51.021Z", "updatedAt": "2018-10-27T06:31:51.021Z", "DangerLattitude": 9.3837, "DangerLongitude": 76.4334, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Changanacheri", "Lattitude": 9.4459, "Longitude": 76.541, "Resolution": 7, "SaferLattitude": 9.44246445585123, "SaferLongitude": 76.5589990623833, "Population": 127987, "Area": 13.9, "Density": 9207.69784172662, "createdAt": "2018-10-27T06:31:51.393Z", "updatedAt": "2018-10-27T06:31:51.393Z", "DangerLattitude": 9.397335179072822, "DangerLongitude": 76.40229078079965, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Chathurthiakary", "Lattitude": 9.939, "Longitude": 76.2705, "Resolution": 4, "SaferLattitude": 9.93710887478049, "SaferLongitude": 76.2807851785047, "Population": 2121923, "Area": 46.18, "Density": 45948.9605889996, "createdAt": "2018-10-27T06:31:51.399Z", "updatedAt": "2018-10-27T06:31:51.399Z", "DangerLattitude": 9.39889988840816, "DangerLongitude": 76.37897430374676, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Cochin", "Lattitude": 9.9312, "Longitude": 76.2673, "Resolution": 3, "SaferLattitude": 9.93790305214582, "SaferLongitude": 76.26092746366, "Population": 677243, "Area": 94.88, "Density": 7137.88996627319, "createdAt": "2018-10-27T06:31:51.461Z", "updatedAt": "2018-10-27T06:31:51.461Z", "DangerLattitude": 9.40372822798237, "DangerLongitude": 76.36740553186077, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Erattupetta", "Lattitude": 9.6858, "Longitude": 76.7751, "Resolution": 27, "SaferLattitude": 9.66030925270471, "SaferLongitude": 76.7865476503457, "Population": 21675, "Area": 14.24, "Density": 1522.12078651685, "createdAt": "2018-10-27T06:31:51.476Z", "updatedAt": "2018-10-27T06:31:51.476Z", "DangerLattitude": 9.412565209840226, "DangerLongitude": 76.51739061885235, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Idukki", "Lattitude": 9.9189, "Longitude": 77.1025, "Resolution": 717, "SaferLattitude": 11.0962692884748, "SaferLongitude": 77.7921913828646, "Population": 1112982, "Area": 4356, "Density": 255.505509641873, "createdAt": "2018-10-27T06:31:51.525Z", "updatedAt": "2018-10-27T06:31:51.525Z", "DangerLattitude": 9.411966275619525, "DangerLongitude": 76.36311920971934, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Muvattupula", "Lattitude": 9.9894, "Longitude": 76.579, "Resolution": 27, "SaferLattitude": 9.97298773470215, "SaferLongitude": 76.648424954907, "Population": 33397, "Area": 13.18, "Density": 2533.91502276176, "createdAt": "2018-10-27T06:31:51.743Z", "updatedAt": "2018-10-27T06:31:51.743Z", "DangerLattitude": 9.423963071014375, "DangerLongitude": 76.51791258366298, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Piravam", "Lattitude": 9.8731, "Longitude": 76.492, "Resolution": 18, "SaferLattitude": 9.85940285019587, "SaferLongitude": 76.5382833032713, "Population": 27229, "Area": 29.36, "Density": 927.41825613079, "createdAt": "2018-10-27T06:31:51.910Z", "updatedAt": "2018-10-27T06:31:51.910Z", "DangerLattitude": 9.427956882973351, "DangerLongitude": 76.51719352090367, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Vazhakulam", "Lattitude": 9.947, "Longitude": 76.6359, "Resolution": 32, "SaferLattitude": 9.89203182727056, "SaferLongitude": 76.5995579498135, "Population": 18358, "Area": 11.12, "Density": 1650.89928057554, "createdAt": "2018-10-27T06:31:52.190Z", "updatedAt": "2018-10-27T06:31:52.190Z", "DangerLattitude": 9.441171475990545, "DangerLongitude": 76.5802770778466, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }]
// saferLocationsArr = [];
// dangerLocationsArr = [];

// arr.forEach(element => {
//     // console.log(element); 
//     obj1 = { lat: element.SaferLattitude, lng: element.SaferLongitude }
//     obj2 = { lat: element.DangerLattitude, lng: element.DangerLongitude }
//     dangerLocationsArr.push(obj2)
//     saferLocationsArr.push(obj1)
    
// });
// console.log(saferLocationsArr);
// console.log(dangerLocationsArr);

// console.log(arr);


var $ = require("jquery");

var $ = require('jquery')
// arr = [{ "Location": "Alleppey", "Lattitude": 9.4981, "Longitude": 76.3388, "Resolution": 2, "SaferLattitude": 9.4981, "SaferLongitude": 76.3365, "Population": 174632, "Area": 46.18, "Density": 3781.5504, "createdAt": "2018-10-27T06:31:51.021Z", "updatedAt": "2018-10-27T06:31:51.021Z", "DangerLattitude": 9.3837, "DangerLongitude": 76.4334, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Changanacheri", "Lattitude": 9.4459, "Longitude": 76.541, "Resolution": 7, "SaferLattitude": 9.44246445585123, "SaferLongitude": 76.5589990623833, "Population": 127987, "Area": 13.9, "Density": 9207.69784172662, "createdAt": "2018-10-27T06:31:51.393Z", "updatedAt": "2018-10-27T06:31:51.393Z", "DangerLattitude": 9.397335179072822, "DangerLongitude": 76.40229078079965, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Chathurthiakary", "Lattitude": 9.939, "Longitude": 76.2705, "Resolution": 4, "SaferLattitude": 9.93710887478049, "SaferLongitude": 76.2807851785047, "Population": 2121923, "Area": 46.18, "Density": 45948.9605889996, "createdAt": "2018-10-27T06:31:51.399Z", "updatedAt": "2018-10-27T06:31:51.399Z", "DangerLattitude": 9.39889988840816, "DangerLongitude": 76.37897430374676, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Cochin", "Lattitude": 9.9312, "Longitude": 76.2673, "Resolution": 3, "SaferLattitude": 9.93790305214582, "SaferLongitude": 76.26092746366, "Population": 677243, "Area": 94.88, "Density": 7137.88996627319, "createdAt": "2018-10-27T06:31:51.461Z", "updatedAt": "2018-10-27T06:31:51.461Z", "DangerLattitude": 9.40372822798237, "DangerLongitude": 76.36740553186077, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Erattupetta", "Lattitude": 9.6858, "Longitude": 76.7751, "Resolution": 27, "SaferLattitude": 9.66030925270471, "SaferLongitude": 76.7865476503457, "Population": 21675, "Area": 14.24, "Density": 1522.12078651685, "createdAt": "2018-10-27T06:31:51.476Z", "updatedAt": "2018-10-27T06:31:51.476Z", "DangerLattitude": 9.412565209840226, "DangerLongitude": 76.51739061885235, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Idukki", "Lattitude": 9.9189, "Longitude": 77.1025, "Resolution": 717, "SaferLattitude": 11.0962692884748, "SaferLongitude": 77.7921913828646, "Population": 1112982, "Area": 4356, "Density": 255.505509641873, "createdAt": "2018-10-27T06:31:51.525Z", "updatedAt": "2018-10-27T06:31:51.525Z", "DangerLattitude": 9.411966275619525, "DangerLongitude": 76.36311920971934, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Muvattupula", "Lattitude": 9.9894, "Longitude": 76.579, "Resolution": 27, "SaferLattitude": 9.97298773470215, "SaferLongitude": 76.648424954907, "Population": 33397, "Area": 13.18, "Density": 2533.91502276176, "createdAt": "2018-10-27T06:31:51.743Z", "updatedAt": "2018-10-27T06:31:51.743Z", "DangerLattitude": 9.423963071014375, "DangerLongitude": 76.51791258366298, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Piravam", "Lattitude": 9.8731, "Longitude": 76.492, "Resolution": 18, "SaferLattitude": 9.85940285019587, "SaferLongitude": 76.5382833032713, "Population": 27229, "Area": 29.36, "Density": 927.41825613079, "createdAt": "2018-10-27T06:31:51.910Z", "updatedAt": "2018-10-27T06:31:51.910Z", "DangerLattitude": 9.427956882973351, "DangerLongitude": 76.51719352090367, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Vazhakulam", "Lattitude": 9.947, "Longitude": 76.6359, "Resolution": 32, "SaferLattitude": 9.89203182727056, "SaferLongitude": 76.5995579498135, "Population": 18358, "Area": 11.12, "Density": 1650.89928057554, "createdAt": "2018-10-27T06:31:52.190Z", "updatedAt": "2018-10-27T06:31:52.190Z", "DangerLattitude": 9.441171475990545, "DangerLongitude": 76.5802770778466, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }]
$.get('http://localhost:5454/api/alert', (res) => {
    arr = res.obj;
    saferLocationsArr = [];
    dangerLocationsArr = [];

    arr.forEach(element => {
        // console.log(element); 
        obj1 = { lat: element.SaferLattitude, lng: element.SaferLongitude }
        obj2 = { lat: element.DangerLattitude, lng: element.DangerLongitude }
        dangerLocationsArr.push(obj2)
        saferLocationsArr.push(obj1)

    });
    // console.log(saferLocationsArr);
    console.log("AMAn");

    // console.log(arr);

    arr.forEach(element => {
        element.DangerLattitude = element.DangerLattitude.toFixed(4)
        element.DangerLongitude = element.DangerLongitude.toFixed(4)
        $("#Monitor .dataPoints").append(`<div class="row mt-1">
                                        <div class="col mt-1">${element.DangerLattitude}</div>
                                        <div class="col mt-1">${element.DangerLongitude}</div>
                                        <div class="col routeButton" Dlat="${element.DangerLattitude}" Dlng="${element.DangerLongitude}" Slat="${element.SaferLattitude}" Slng="${element.SaferLongitude}" Area="${element.Area}" Population="${element.Population}" Density="${element.Density}" Location="${element.Location}" WaterArea="${element.WaterArea}"> <button>Route</button> </div>
                                    </div>`)
        // console.log(dangerlocation.lat);

    });

    $('#Monitor').on('click', '.routeButton', function () {
        DLat = $(this)["0"].attributes[1].nodeValue;
        Dlng = $(this)["0"].attributes[2].nodeValue;
        Slat = $(this)["0"].attributes[3].nodeValue;
        Slng = $(this)["0"].attributes[4].nodeValue;
        Area = $(this)["0"].attributes[5].nodeValue;
        Population = $(this)["0"].attributes[6].nodeValue;
        // Density=parseFloat($(this)["0"].attributes[7].nodeValue);
        LocationName = $(this)["0"].attributes[8].nodeValue;
        WaterArea = $(this)["0"].attributes[9].nodeValue;

        // Density=Density.toFixed(3)
        obj1 = {
            "lat": parseFloat(DLat),
            "lng": parseFloat(Dlng)
        }
        obj2 = {
            "lat": parseFloat(Slat),
            "lng": parseFloat(Slng)
        }
        console.log(obj1);
        console.log(obj2);
        $(".console").empty();
        DisplayRoute(directionsService, directionsDisplay, obj1, obj2);

        $(".console").append(`<div class="row ml-3">Area = ${Area} Km</div>`);
        $(".console").append(` <div class="row ml-3">Population = ${Population}</div>`);
        // $(".console").append(`<div class="row ml-3">Density = ${Density} </div>`);
        $(".console").append(`<div class="row ml-3">Location = ${LocationName} </div> `);
        $(".console").append(` <div class="row ml-3">Total Water Rise = ${WaterArea} m^2</div>`);
        // console.log($(this)["0"].attributes[2].nodeValue);
        // console.log(dangerlocations_arr[0]);
        // obj = {
        //     "lat": parseFloat($(this)["0"].attributes[1].nodeValue),
        //     "lng": parseFloat($(this)["0"].attributes[2].nodeValue)
        // }
        // console.log(obj == dangerlocations_arr[0]);
        // console.log(obj);

        // calculateAndDisplayRoute(directionsService, directionsDisplay, obj, safelocations_arr);

    });     



})


