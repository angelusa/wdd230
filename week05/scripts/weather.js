// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-description');

// Declare a const variable named "url" and assign it a valid URL string
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7598&lon=6.6539&units=imperial&appid=3e12af623e602c597021ee4d65741e25';

// Define an asynchronous function named "apiFetch()"
async function apiFetch() {
    try {
        // Use try block to handle errors
        // Store the results of the URL fetch into a variable named "response"
        const response = await fetch(url);

        // Check if the response is OK
        if (response.ok) {
            // If the response is OK, store the result of response.json() conversion in a variable named "data"
            const data = await response.json();
            console.log('API Response:', data); // Log the API response
            // Call the displayResults function with the fetched data
            displayResults(data);
        } else {
            // If response is not OK, throw an Error using the response.text()
            throw Error(await response.text());
        }
    } catch (error) {
        // Output any try error to the console
        console.error('Error fetching weather data:', error);
    }
}

// Invoke the apiFetch() function to fetch weather data
apiFetch();

// Define displayResults function
function displayResults(data) {
    // Clear any previous content
    currentTemp.innerHTML = '';
    weatherIcon.src = '';
    captionDesc.textContent = '';

    // Log the weather data
    console.log('Weather Data:', data.weather);

    // Iterate through each weather event
    data.weather.forEach(weatherEvent => {
        // Capitalize each word of the weather description
        let capitalizedDescription = weatherEvent.description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        // Format temperature to show zero decimal points
        let temperature = Math.round(data.main.temp);

        // Update HTML elements for each weather event
        currentTemp.innerHTML = `${temperature}&deg;F`; // Use innerHTML to correctly render the degree symbol

        let iconUrl = `https://openweathermap.org/img/w/${weatherEvent.icon}.png`;
        console.log('Icon URL:', iconUrl); // Log the icon URL

        weatherIcon.src = iconUrl;
        weatherIcon.alt = capitalizedDescription;

        captionDesc.textContent = capitalizedDescription;
    });
}