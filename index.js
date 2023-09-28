const clientID = `QzM56G_bMgxE8HGGhqXUhyT8n7MruPw4RLde9vPvAP0`;
const url = `https://api.unsplash.com/photos/random/?client_id=${clientID}&query=aesthetic`;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    const imageUrl = jsonData.urls.regular;
    document.body.style.backgroundImage = `url(${imageUrl})`;
    
  });

let searchBar = document.querySelector(".search-Bar");
let searchbtn = document.querySelector("button");
let weather = {
  apiKey: "5b9bf7fd01fbe2b167b23d1839396f5b",
};

let btn = document.getElementById("btn");
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let description = document.querySelector(".description");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let img = document.querySelector(".icon")

btn.addEventListener("click", () => {
  const APIkey = `5b9bf7fd01fbe2b167b23d1839396f5b`;
  let cityname = document.querySelector(".search-bar").value;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`;

  fetch(weatherUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(function (jsonData) {
      city.textContent = `Currently in ${cityname}`;
      temp.textContent = `${((jsonData.main.temp * 9) / 5 + 32).toFixed(2)}°F`;
      description.textContent = jsonData.weather[0].description;
      humidity.textContent = `Humidity: ${jsonData.main.humidity}%`;
      wind.textContent = `Wind Speed: ${jsonData.wind.speed}km`;
      img.src = `https://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png`;
    })
    .catch((error) => {
      console.log(error);
      city.textContent = "City not found"; // Set the text content to "City not found" in case of an error
      description.textContent="-----"
      temp.textContent="-----"
      humidity.textContent="-----"
      wind.textContent="-----"
      img.src="https://openweathermap.org/img/wn/01n@2x.png"

    });
});