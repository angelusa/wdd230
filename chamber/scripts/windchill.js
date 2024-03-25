async function apiFetch() {
  try {
    const apiKey = "3e12af623e602c597021ee4d65741e25"; // Your OpenWeatherMap API key
    const town = "Larkspur";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${apiKey}&units=imperial`;

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
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

  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);
  
  if (captionDesc) { // Check if captionDesc element exists
    captionDesc.textContent = capitalizeStr(desc);
  }

  windChillCalc(weatherData.main.temp, weatherData.wind.speed);
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
