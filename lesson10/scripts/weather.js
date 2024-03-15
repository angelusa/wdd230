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
    weatherIcon.innerHTML = '';
    captionDesc.textContent = '';

    // Iterate through each weather event
    data.weather.forEach(weatherEvent => {
        // Capitalize each word of the weather description
        let capitalizedDescription = weatherEvent.description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        // Format temperature to show zero decimal points
        let temperature = Math.round(data.main.temp);

        // Create HTML elements for each weather event
        let tempElement = document.createElement('span');
        tempElement.innerHTML = `${temperature}&deg;F`; // Use innerHTML to correctly render the degree symbol
        currentTemp.appendChild(tempElement);

        let iconElement = document.createElement('img');
        iconElement.setAttribute('src', `https://openweathermap.org/img/w/${weatherEvent.icon}.png`);
        iconElement.setAttribute('alt', capitalizedDescription);
        weatherIcon.appendChild(iconElement);

        let descElement = document.createElement('span');
        descElement.textContent = `${capitalizedDescription}`;
        captionDesc.appendChild(descElement);

        // Add line break after each weather event
        captionDesc.appendChild(document.createElement('br'));
    });
}
