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
  // Get today's date
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to midnight

  // Calculate the date for the next two days
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  // Filter forecast data for the next three days
  const threeDayForecast = weatherData.list.filter(forecast => {
    const forecastDate = new Date(forecast.dt_txt);
    forecastDate.setHours(0, 0, 0, 0); // Set time to midnight

    return forecastDate >= today && forecastDate <= dayAfterTomorrow;
  });

  populateTable(threeDayForecast);
  return threeDayForecast;
}

// Function to populate the table with JSON data
function populateTable(data) {
  var tableBody = document.getElementById('showstat').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // Clear existing rows

  data.forEach(function (entry) {
    if (entry.dt_txt.includes('12:00:00')) {
      var row = tableBody.insertRow();

      var dateCell = row.insertCell(0);
      var tempCell = row.insertCell(1);
      var feelsLikeCell = row.insertCell(2);
      var weatherCell = row.insertCell(3);
      var windSpeedCell = row.insertCell(4);
      var humidityCell = row.insertCell(5);

      const iconUrl = `https://openweathermap.org/img/w/${entry.weather[0].icon}.png`; // Weather icon URL
      const date = new Date(entry.dt_txt).toLocaleDateString('en-US'); // Format date as MM/DD/YYYY

      dateCell.textContent = date;
      tempCell.textContent = entry.main.temp;
      feelsLikeCell.textContent = entry.main.feels_like;
      weatherCell.innerHTML = `<img src="${iconUrl}" alt="${entry.weather[0].description}" /> ${entry.weather[0].description}`; // Display weather icon and description
      windSpeedCell.textContent = entry.wind.speed;
      humidityCell.textContent = entry.main.humidity;
    }
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

apiFetch();
apiFetchForecast();
