// windchill.js

// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if temperature and wind speed meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill factor using the formula
        var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2); // Return wind chill factor rounded to 2 decimal places
    } else {
        return "N/A"; // Return "N/A" if specification limits are not met
    }
}

// Function to update the wind chill value on the webpage
function updateWindChill() {
    // Get the temperature and wind speed elements from the HTML
    var temperatureElement = document.getElementById("temperature").innerText;
    var windSpeedElement = document.getElementById("wind-speed").innerText;

    // Convert temperature and wind speed values to numbers
    var temperature = parseFloat(temperatureElement);
    var windSpeed = parseFloat(windSpeedElement);

    // Call calculateWindChill function to get wind chill value
    var windChill = calculateWindChill(temperature, windSpeed);

    // Update the HTML element with the calculated wind chill value
    var windChillElement = document.getElementById("wind-chill");
    windChillElement.innerText = windChill;
}

// Call updateWindChill function when the page loads
window.onload = updateWindChill;
