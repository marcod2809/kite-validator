const express = require('express');
const got = require('got')
var app = express();

app.use(express.static('public'))
app.use(express.json())

// get F-O datas
app.post('/geoloc', (request, response) => {
    const userlat = request.body.lat
    const userlong = request.body.lon
    getCurrentWeather(userlat, userlong)
})

// Fetch weather datas
async function getCurrentWeather (userlat, userlong){
    try {
        const response = await got ('https://jsonplaceholder.typicode.com/todos/1')
        console.log(response.body)
    } catch (error) {
        console.error(error.response.body)
    }
};


// start the server in the port 3000 !
app.listen(3000, () => {
    console.log('app listening on port 3000.');
}); 

