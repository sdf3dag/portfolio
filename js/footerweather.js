
function getWeather() {
    let weathericon = document.getElementById("icon");
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");

    const weather = {};

// API KEY 
    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "ace8fb2079918ed6b66b0a170317d5a2";

    
// CHECK IF BROWSER SUPPORTS GEOLOCATION
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    }else{
        notificationElement.style.display = "block";
        notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
    }


// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// SET USER'S POSITION    
    function setPosition(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
}

    let url =
      api +
      "?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apiKey +
      "&units=imperial";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let temp = data.main.temp;
            iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
            weather.iconId = data.weather[0].icon;
            temperature.innerHTML = temp + "° F";
            location.innerHTML = data.name;
            description.innerHTML = data.weather[0].main;
        })
        .then(function(){
            displayWeather();
        });

    }











