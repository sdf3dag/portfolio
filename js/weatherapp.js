
function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let location = document.getElementById("location");
  let icon = document.getElementById("icon");
  let api = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "ace8fb2079918ed6b66b0a170317d5a2";

  location.innerHTML = "Locating...";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

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
        icon.innerHTML = data.weather[0].icon;
        temperature.innerHTML = temp + "° F";
        location.innerHTML = data.name;
        description.innerHTML = data.weather[0].main;
      })
      .then(function(){
          displayWeather();
      });
  }

  // DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>F</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.state}`;
}

  

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }
}

getWeather();