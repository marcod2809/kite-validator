const express = require('express');
const got = require('got');
const app = express();
require('dotenv').config()


app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

app.get('/weather', async (request, response) => {
    let apiKey = process.env.API_KEY
    let rawWeather = await got('https://api.openweathermap.org/data/2.5/onecall?lat=50.89&lon=1.66&exclude=alerts,minutely,daily&appid='+ apiKey +'&units=metric')
    let weather = JSON.parse(rawWeather.body)
    let windSpeed = knotsConvertor(weather.current.wind_speed)
    let windCriterion = windSpeedEvaluator(windSpeed)
    let orientationCriterion = orientationEvaluator(weather.current.wind_deg)
    let rideScoring = overallRideScoring(windCriterion, orientationCriterion)
    response.json({temperature: weather.current.temp, windSpeed: windSpeed, windCriterion : windCriterion, orientationCriterion : orientationCriterion, overallRideScoring : rideScoring})    
});


function knotsConvertor(wind_speed){
    return Math.round(wind_speed / 0.51444444444444)
}

function windSpeedEvaluator(windSpeed){
    if(windSpeed > 15){
        return true
    } else {
        return false
    }
} 

function orientationEvaluator(windDegree){
    if(windDegree > 225 || windDegree < 45){
        return true
    } else {
        return false
    }
}

function overallRideScoring(windCriterion, orientationCriterion){
    if (windCriterion === true && orientationCriterion === true){
        return true;
    } else {
        return false
    }
}

// start the server in the port 3000 !
app.listen(process.env.PORT, () => {console.log('app listening on port ' + process.env.PORT);}); 

