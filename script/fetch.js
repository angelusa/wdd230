// fetchData.js
const url = 'https://angleusa.github.io/wdd230/data/links.json';
const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

fetch(corsProxyUrl + url, {
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
