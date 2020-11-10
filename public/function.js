function getGeoloc (){
    if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude
        const long = position.coords.longitude
        const data = {lat, long}
        const options = {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        }   
        fetch('/geoloc', options)
      });
} else {
    alert('please allow geolocation');
}};


export {getGeoloc};