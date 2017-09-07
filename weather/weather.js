const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url:`https://api.darksky.net/forecast/138ac5c11252e3cf8c0370ba2a9d7a6e/${lat},${lng}`,
        json: true
    
    }, (error, response, body) =>{
        if (!error && response.statusCode === 200) {
           callback( undefined,{
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
           });
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

module.exports.getWeather = getWeather;
