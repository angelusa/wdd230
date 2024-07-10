const displayProphets = (prophets) => {
  console.log('Prophets data:', prophets); // Log the data to verify its structure

  prophets.forEach((prophet, index) => {
    console.log('Processing prophet:', index, prophet); // Log each prophet object

    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthDate = document.createElement('p'); // Element for date of birth
    let birthPlace = document.createElement('p'); // Element for place of birth

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = prophet.fullName;
    console.log('Full name:', prophet.fullName); // Log the full name

    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.portrait);
    portrait.setAttribute('alt', 'Portrait of ' + prophet.fullName);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
    console.log('Portrait URL:', prophet.portrait); // Log the portrait URL

    // Add the date of birth
    birthDate.textContent = 'Date of Birth: ' + prophet.dateOfBirth;
    console.log('Date of Birth:', prophet.dateOfBirth); // Log the date of birth

    // Add the place of birth
    birthPlace.textContent = 'Place of Birth: ' + prophet.placeOfBirth;
    console.log('Place of Birth:', prophet.placeOfBirth); // Log the place of birth

    // Append the section(card) with the created elements
    card.appendChild(fullName);
    card.appendChild(portrait);
    card.appendChild(birthDate); // Append the date of birth
    card.appendChild(birthPlace); // Append the place of birth

    document.getElementById('cards').appendChild(card);
  });
}