// Function to fetch weather data from OpenWeatherMap API
function fetchWeather() {
    const apiKey = '3e12af623e602c597021ee4d65741e25'; // Replace with your OpenWeatherMap API key
    const city = 'Larkspur'; // Replace 'Larkspur' with your desired city name
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch data from OpenWeatherMap API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract required weather information
            const temperatureCelsius = data.main.temp;
            const temperatureFahrenheit = Math.round((temperatureCelsius * 9/5) + 32); // Convert Celsius to Fahrenheit and round to whole number
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

            // Update HTML content with weather information
            document.getElementById('weather-temperature').textContent = `${temperatureFahrenheit} °F`; // Display temperature in Fahrenheit rounded to whole number
            document.getElementById('weather-description').textContent = description;
            document.getElementById('weather-icon').setAttribute('src', iconUrl);

            // Update page visit count
            updatePageVisitCount();
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// Function to update page visit count
function updatePageVisitCount() {
    // Retrieve the counter value from localStorage
    let pageVisits = localStorage.getItem("pageVisits");
    
    // Check if pageVisits exists in localStorage
    if (pageVisits) {
        // If exists, increment the counter
        pageVisits++;
    } else {
        // If doesn't exist, set the counter to 1
        pageVisits = 1;
    }
    
    // Display the counter on the page
    document.getElementById("pageVisit").textContent = pageVisits;
    
    // Write JavaScript code to increment the counter and store it in localStorage
    localStorage.setItem("pageVisits", pageVisits);
}

// Call fetchWeather function when the page loads
window.addEventListener('load', fetchWeather);


