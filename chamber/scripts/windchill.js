function windChillCalc() {
  const temperatureF = parseFloat(
    document.querySelector(".temperature").textContent
  );
  const windSpeedMph = parseFloat(
    document.querySelector(".wind-speed").textContent
  );

  const windChill = document.querySelector(".wind-chill");
  const chillValue = windChillF(temperatureF, windSpeedMph);
  
  // Check if wind chill value is not "N/A" before updating
  if (chillValue !== "N/A") {
    windChill.textContent = chillValue; // Remove "°F" here
  } else {
    windChill.textContent = chillValue; // Set wind chill to "N/A"
  }

  // Display the banner only on Mondays, Tuesdays, and Wednesdays
  const currentDate = new Date();
  const currentDay = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const banner = document.querySelector('.banner');

  if (currentDay >= 1 && currentDay <= 3) {
    // Show the banner
    banner.style.display = 'block';

    // Add specific invitation text for Wednesday
    if (currentDay === 3) { // Wednesday
      banner.innerHTML = "Join us for a chamber of commerce meet and greet on Wednesday at 7:00 pm!";
    } else {
      // Remove the banner content for other days
      banner.innerHTML = "";
    }
  } else {
    // Hide the banner on other days
    banner.style.display = 'none';
  }
}

function windChillF(temperatureF, windSpeedMph) {
  let windChillF;
  if (temperatureF <= 50 && windSpeedMph > 3) {
    const t = temperatureF;
    const s = windSpeedMph ** 0.16;
    windChillF = 35.74 + 0.6215 * t - 35.75 * s + 0.4275 * t * s;
    windChillF = windChillF.toFixed(1);
  } else {
    windChillF = "N/A";
  }
  return windChillF;
}

async function apiFetch() {
  try {
    const apiKey = "3e12af623e602c597021ee4d65741e25";
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
  const captionDesc = document.querySelector(".weather-description");

  temperature.innerHTML = `${weatherData.main.temp.toFixed(1)}°F`; // Display temperature in Fahrenheit
  windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(1)} mph`; // Display wind speed in mph

  const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = capitalizeStr(desc); // Display weather description

  windChillCalc(); // Calculate and display wind chill
}

function capitalize(word) {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalized;
}

function capitalizeStr(string) {
  let capitalized;
  if (string.includes(" ")) {
    let split = string.split(" ");
    split = split.map((word) => capitalize(word));
    capitalized = split.join(" ");
  } else {
    capitalized = capitalize(string);
  }
  return capitalized;
}

apiFetch();
