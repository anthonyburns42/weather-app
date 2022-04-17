const request = require('request');

const geocode = (address, callback) => {
    const url = '' + encodeURIComponent(address) + '';
    request({ url: geocodeURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services.', undefined);
        } else if (response.body.features.length === 0) {
            callback("Unable to find location.", undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            });
        }
    });
}

module.exports = geocode;