const url = 'https://angelusa.github.io/wdd230/week05/prophets.json';

fetch(url)
  .then(response => response.json())
  .then(data => {
    displayProphets(data);
  })
  .catch(error => console.error('Error fetching data:', error));