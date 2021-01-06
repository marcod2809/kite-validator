let positiveArray = ['Fonçe !', 'Go Go Go !', 'C\'est très bon !']
let negativeArray = ['Je te conseille pas aujourd\'hui !', 'Attends un autre jour..', 'On fait une partie de belote ?', 'Reste à la maison, ça vaut mieux ...']

fetch('/weather')
.then((response) => {return response.json(); })
.then((data) => {
     let divWind = document.getElementById('windspeed')
     let divTemp = document.getElementById('outsidetemp')
     let imgDiv = document.getElementById('illustration')
     let divContext = document.getElementById('contextSentence')
    divWind.innerHTML = data.windSpeed + " knots";
    divTemp.innerHTML = data.temperature + " degrees";
    if (data.overallRideScoring === true){
         imgDiv.setAttribute('src', 'assets/go.gif')
         divContext.innerHTML = randomSentence(positiveArray)
     } 
    else {
          imgDiv.setAttribute('src', 'assets/donotgo.gif')
          divContext.innerHTML = randomSentence(negativeArray)
         };
     })
.catch(error => {
     console.error(error)
});

function randomSentence(Array){
     const max = Array.length
     const index = Math.floor(Math.random() * Math.floor(max));
     return Array[index]
}