const request = require('request');

var geocodeAddress = (address) => {
  return new promise = ((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) =>{
        if (error) {
            reject('Unable to connect google api.');
        } else if (body.status === 'ZERO_RESULTS') {
            reject('Unable to find the address.');
        } else if (body.status === 'OK') {
            resolve(undefined, {
                address: body.results[0].formatted_address,
                lattitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });  
        } else if (body.status === 'INVALID_REQUEST') {
            reject('Invalid Request.');
        }
    });
   });
};

geocodeAddress('19146').then((location) =>{
 console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
 console.log(errorMessage);
});