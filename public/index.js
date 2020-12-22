fetch('/weather')
.then((response) => {return response.json(); })
.then((data) => {
     let divWind = document.getElementById('windspeed')
     let divTemp = document.getElementById('outsidetemp')
     let imgDiv = document.getElementById('illustration')
    divWind.innerHTML = data.windSpeed + " knots";
    divTemp.innerHTML = data.temperature + " degrees";
    if (data.overallRideScoring === true){
         imgDiv.setAttribute('src', 'assets/go.gif')} 
    else {
     imgDiv.setAttribute('src', 'assets/donotgo.gif')
         };
     })
.catch(error => {
     console.error(error)
});