async function apiFetch() {
  try {
      const apiKey = "3e12af623e602c597021ee4d65741e25"; // Your OpenWeatherMap API key
      const town = "Larkspur";

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${apiKey}&units=imperial`;

      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          console.log(data);
          displayResults(data);
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
      console.log(error);
  }
}

async function apiFetchForecast() {
  try {
      const apiKey = "3e12af623e602c597021ee4d65741e25"; // Your OpenWeatherMap API key
      const town = "Larkspur";

      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${town}&appid=${apiKey}&units=imperial`;

      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          console.log(data);
          getThreeDayForecast(data);
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(weatherData) {
  const temperature = document.querySelector(".temperature");
  const windSpeed = document.querySelector(".wind-speed");
  const weatherIcon = document.querySelector(".weather-icon");
  const captionDesc = document.querySelector(".weather-description"); // Select weather description element
  const windChill = document.querySelector(".wind-chill"); // Select wind chill element

  temperature.textContent = `${Math.round(weatherData.main.temp)}°F`;
  windSpeed.textContent = `${weatherData.wind.speed.toFixed(1)} mph`;

  const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  console.log("Description: ", desc);

  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);

  if (captionDesc) { // Check if captionDesc element exists
      captionDesc.textContent = capitalizeStr(desc);
  }

  windChillCalc(weatherData.main.temp, weatherData.wind.speed);
}

function getThreeDayForecast(weatherData) {
  const threeDayForecast = [];
  const today = new Date();
  let currentDay = today.getDate();

  for (let i = 0; i < weatherData.list.length; i++) {
      const forecastDate = new Date(weatherData.list[i].dt_txt);
      if (forecastDate.getDate() !== currentDay && forecastDate.getHours() === 12) {
          threeDayForecast.push(weatherData.list[i]);
          currentDay = forecastDate.getDate();
          if (threeDayForecast.length === 3) break;
      }
  }

  populateTable(threeDayForecast);
}

function populateTable(data) {
  const tableBody = document.getElementById('showstat').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // Clear existing rows

  data.forEach(function (entry) {
      const row = tableBody.insertRow();

      const dateCell = row.insertCell(0);
      const tempCell = row.insertCell(1);
      const feelsLikeCell = row.insertCell(2);
      const weatherCell = row.insertCell(3);
      const windSpeedCell = row.insertCell(4);
      const humidityCell = row.insertCell(5);

      const iconUrl = `https://openweathermap.org/img/w/${entry.weather[0].icon}.png`; // Weather icon URL
      const date = new Date(entry.dt_txt).toLocaleDateString('en-US'); // Format date as MM/DD/YYYY

      dateCell.textContent = date;
      tempCell.textContent = entry.main.temp;
      feelsLikeCell.textContent = entry.main.feels_like;
      weatherCell.innerHTML = `<img src="${iconUrl}" alt="${entry.weather[0].description}" /> ${entry.weather[0].description}`; // Display weather icon and description
      windSpeedCell.textContent = entry.wind.speed;
      humidityCell.textContent = entry.main.humidity;
  });
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalizeStr(string) {
  const words = string.split(" ");
  const capitalizedWords = words.map(word => capitalize(word));
  return capitalizedWords.join(" ");
}

function windChillCalc(temperatureF, windSpeedMph) {
  let windChillF;
  const t = temperatureF;
  const s = windSpeedMph;
  windChillF = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
  windChillF = Math.round(windChillF);
  console.log("Wind chill:", windChillF);

  const windChillElement = document.querySelector(".wind-chill");
  if (windChillElement) { // Check if windChillElement exists
      windChillElement.textContent = windChillF;
  }
}

function updateLastModified() {
  const lastModifiedElement = document.querySelector(".last-modified");
  if (lastModifiedElement) {
      const lastModified = new Date(document.lastModified);
      lastModifiedElement.textContent = lastModified.toLocaleString();
  } else {
      console.error('Last modified element not found.');
  }
}

document.addEventListener("DOMContentLoaded", function() {
  apiFetch();
  apiFetchForecast();
  updateLastModified();
});
