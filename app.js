const request = require('request');
const geocode = require('./utils/geocode');

// Not empty in production or testing. Empty for pushing to repo.
const url = '';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to weather service.");
    } else if (response.body.error) {
        console.log("Unable to find location.");
    } else {
        console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.');
    }
});


// Geocoding: address -> lat/long -> weather
// Original code

// // Not empty in production or testing. Empty for pushing to repo.
// const geocodeURL = '';

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to location services.");
//     } else if (response.body.features.length === 0) {
//         consolelog("Unable to find location.");
//     } else {
//         const latitude = response.body.features[0].center[0];
//         const longitude = response.body.features[0].center[1];
//         console.log(latitude, longitude);
//     }
// });





geocode('Perry', (error, data) +.{
    console.log('Error', error);
    console.log('Data', data);
});