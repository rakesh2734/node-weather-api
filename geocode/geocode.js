const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) =>{
        if (error) {
            callback('Unable to connect google api.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find the address.');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lattitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });  
        } else if (body.status === 'INVALID_REQUEST') {
            callback('Invalid Request.');
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;

