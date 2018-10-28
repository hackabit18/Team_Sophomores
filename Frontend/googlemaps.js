// arr = [{ "Location": "Alleppey", "Lattitude": 9.4981, "Longitude": 76.3388, "Resolution": 2, "SaferLattitude": 9.49813570645997, "SaferLongitude": 76.3365657835188, "Population": 174632, "Area": 46.18, "Density": 3781.55045474231, "createdAt": "2018-10-27T06:31:51.021Z", "updatedAt": "2018-10-27T06:31:51.021Z", "DangerLattitude": 9.383705304519584, "DangerLongitude": 76.43347988896427, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Changanacheri", "Lattitude": 9.4459, "Longitude": 76.541, "Resolution": 7, "SaferLattitude": 9.44246445585123, "SaferLongitude": 76.5589990623833, "Population": 127987, "Area": 13.9, "Density": 9207.69784172662, "createdAt": "2018-10-27T06:31:51.393Z", "updatedAt": "2018-10-27T06:31:51.393Z", "DangerLattitude": 9.397335179072822, "DangerLongitude": 76.40229078079965, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Chathurthiakary", "Lattitude": 9.939, "Longitude": 76.2705, "Resolution": 4, "SaferLattitude": 9.93710887478049, "SaferLongitude": 76.2807851785047, "Population": 2121923, "Area": 46.18, "Density": 45948.9605889996, "createdAt": "2018-10-27T06:31:51.399Z", "updatedAt": "2018-10-27T06:31:51.399Z", "DangerLattitude": 9.39889988840816, "DangerLongitude": 76.37897430374676, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Cochin", "Lattitude": 9.9312, "Longitude": 76.2673, "Resolution": 3, "SaferLattitude": 9.93790305214582, "SaferLongitude": 76.26092746366, "Population": 677243, "Area": 94.88, "Density": 7137.88996627319, "createdAt": "2018-10-27T06:31:51.461Z", "updatedAt": "2018-10-27T06:31:51.461Z", "DangerLattitude": 9.40372822798237, "DangerLongitude": 76.36740553186077, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Erattupetta", "Lattitude": 9.6858, "Longitude": 76.7751, "Resolution": 27, "SaferLattitude": 9.66030925270471, "SaferLongitude": 76.7865476503457, "Population": 21675, "Area": 14.24, "Density": 1522.12078651685, "createdAt": "2018-10-27T06:31:51.476Z", "updatedAt": "2018-10-27T06:31:51.476Z", "DangerLattitude": 9.412565209840226, "DangerLongitude": 76.51739061885235, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Idukki", "Lattitude": 9.9189, "Longitude": 77.1025, "Resolution": 717, "SaferLattitude": 11.0962692884748, "SaferLongitude": 77.7921913828646, "Population": 1112982, "Area": 4356, "Density": 255.505509641873, "createdAt": "2018-10-27T06:31:51.525Z", "updatedAt": "2018-10-27T06:31:51.525Z", "DangerLattitude": 9.411966275619525, "DangerLongitude": 76.36311920971934, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Muvattupula", "Lattitude": 9.9894, "Longitude": 76.579, "Resolution": 27, "SaferLattitude": 9.97298773470215, "SaferLongitude": 76.648424954907, "Population": 33397, "Area": 13.18, "Density": 2533.91502276176, "createdAt": "2018-10-27T06:31:51.743Z", "updatedAt": "2018-10-27T06:31:51.743Z", "DangerLattitude": 9.423963071014375, "DangerLongitude": 76.51791258366298, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Piravam", "Lattitude": 9.8731, "Longitude": 76.492, "Resolution": 18, "SaferLattitude": 9.85940285019587, "SaferLongitude": 76.5382833032713, "Population": 27229, "Area": 29.36, "Density": 927.41825613079, "createdAt": "2018-10-27T06:31:51.910Z", "updatedAt": "2018-10-27T06:31:51.910Z", "DangerLattitude": 9.427956882973351, "DangerLongitude": 76.51719352090367, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }, { "Location": "Vazhakulam", "Lattitude": 9.947, "Longitude": 76.6359, "Resolution": 32, "SaferLattitude": 9.89203182727056, "SaferLongitude": 76.5995579498135, "Population": 18358, "Area": 11.12, "Density": 1650.89928057554, "createdAt": "2018-10-27T06:31:52.190Z", "updatedAt": "2018-10-27T06:31:52.190Z", "DangerLattitude": 9.441171475990545, "DangerLongitude": 76.5802770778466, "TimeStamp": 1600, "WaterArea": 14461962, "CriticalFactor": 0.3493855121455858, "Alert": 1 }]
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
var arr = require('./map-points.json')
var $ = require('jquery');


var map;
var directionsService;
var directionsDisplay;

// gamble
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
    var dangerlocations_arr = dangerLocationsArr
    var safelocations_arr = saferLocationsArr
    // console.log(saferLocationsArr);
    console.log("AMAn");

    // console.log(arr);
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 5,
            center: { lat: 10.8505, lng: 76.2711 }
        });
        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers1 = dangerlocations_arr.map(function (location, i) {
            return new google.maps.Marker({
                position: location
            });
        });

        var markers2 = safelocations_arr.map(function (location, i) {
            return new google.maps.Marker({
                position: location,
                icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                }
            });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers1,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers2,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

        // Instantiate a directions service.
        directionsService = new google.maps.DirectionsService;
        directionsDisplay = new google.maps.DirectionsRenderer({
            map: map
        });
        // calculateAndDisplayRoute(directionsService, directionsDisplay, dangerlocations_arr[0], safelocations_arr);
        // dangerlocations_arr.forEach(dangerpoint => {
        //     calculateAndDisplayRoute(directionsService, directionsDisplay, dangerpoint, safelocations_arr);        
        // });

    }



    

    function setMap() {
        map.setMapTypeId('terrain');
    }


    initMap();

})

function DisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
    directionsService.route({
        origin: pointA,
        destination: pointB,
        travelMode: google.maps.TravelMode.DRIVING
    }, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            var dist = response.routes[0].legs[0].distance.value;
            dist = dist / 1000;
            directionsDisplay.setDirections(response);
            // $(".console").empty();
            $(".console").append(`<div class="row ml-3">Total Distance = ${dist} Km </div> `);
        } else {
            // window.alert('Directions request failed due to ' + status);
        }
    });
}
// gamble


