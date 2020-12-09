fetch('/weather')
.then((response) => {return response.json(); })
.then((data) => {
    var div1 = document.createElement("div")
    var div2 = document.createElement("div")
    var img = document.createElement("img")
    div1.innerHTML = data.windSpeed + " knots"
    div2.innerHTML = data.temperature + " degrees"
    if (data.overallRideScoring === true){
         img.setAttribute('src', 'assets/go.gif')} 
     else {
          img.setAttribute('src', 'assets/donotgo.gif')
         }
    document.body.appendChild(img); 
    document.body.appendChild(div1); 
    document.body.appendChild(div2); 
    console.log(data)})
.catch(error => {
     console.error(error)
});