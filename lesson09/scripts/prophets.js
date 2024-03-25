const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Fetch data from the URL
fetch(url)
  .then(response => {
    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Handle the JSON data
    console.log(data); // You can perform any operation with the JSON data here
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });



  const prophets = [
    {
        fullName: "Joseph Smith",
        portrait: "images/Joseph_Smith.webp",
        dateOfBirth: "December 23, 1805",
        placeOfBirth: "Sharon, Vermont, United States"
      },
      {
        fullName: "Brigham Young",
        portrait: "images/Brigham_Young.webp",
        dateOfBirth: "June 1, 1801",
        placeOfBirth: "Whitingham, Vermont, United States"
      },
      {
        fullName: "John Taylor",
        portrait: "images/John Taylor.webp",
        dateOfBirth: "November 1, 1808",
        placeOfBirth: "Milnthorpe, Westmorland, England"
      },
      {
        fullName: "Wilford Woodruff",
        portrait: "images/Wilford Woodruff.webp",
        dateOfBirth: "March 1, 1807",
        placeOfBirth: "Farmington, Connecticut, United States"
      },
      {
        fullName: "Lorenzo Snow",
        portrait: "images/Lorenzo Snow.webp",
        dateOfBirth: "April 3, 1814",
        placeOfBirth: "Mantua, Ohio, United States"
      },
      {
        fullName: "Joseph F. Smith",
        portrait: "images/Joseph F Smith.webp",
        dateOfBirth: "November 13, 1838",
        placeOfBirth: "Far West, Missouri, United States"
      },
      {
        fullName: "Heber J. Grant",
        portrait: "images/Heber J Grant.webp",
        dateOfBirth: "November 22, 1856",
        placeOfBirth: "Salt Lake City, Utah, United States"
      },
      {
        fullName: "George Albert Smith",
        portrait: "images/George Albert Smith.webp",
        dateOfBirth: "April 4, 1870",
        placeOfBirth: "Salt Lake City, Utah, United States"
      },
      {
        fullName: "David O. McKay",
        portrait: "images/David O McKay.webp",
        dateOfBirth: "September 8, 1873",
        placeOfBirth: "Huntsville, Utah, United States"
      },
      {
        fullName: "Joseph Fielding Smith",
        portrait: "images/Joseph Fielding Smith.webp",
        dateOfBirth: "July 19, 1876",
        placeOfBirth: "Salt Lake City, Utah, United States"
      },
      {
        fullName: "Harold B. Lee",
        portrait: "images/Harold B. Lee.webp",
        dateOfBirth: "March 28, 1899",
        placeOfBirth: "Clifton, Idaho, United States"
      },
      {
        fullName: "Spencer W. Kimball",
        portrait: "images/Spencer W. Kimball.webp",
        dateOfBirth: "March 28, 1895",
        placeOfBirth: "Salt Lake City, Utah, United States"
      },
      {
        fullName: "Ezra Taft Benson",
        portrait: "images/Ezra Taft Benson.webp",
        dateOfBirth: "August 4, 1899",
        placeOfBirth: "Whitney, Idaho, United States"
      },
      {
        fullName: "Howard W. Hunter",
        portrait: "images/Howard W.Hunter.webp",
        dateOfBirth: "November 14, 1907",
        placeOfBirth: "Boise, Idaho, United States"
      },
      {
        fullName: "Gordon B. Hinckley",
        portrait: "images/Gordon B. Hinckley.webp",
        dateOfBirth: "June 23, 1910",
        placeOfBirth: "Salt Lake City, Utah, United States"
      },
      {
        fullName: "Thomas S. Monson",
        portrait: "images/Thomas S Monson.webp",
        dateOfBirth: "August 21, 1927",
        placeOfBirth: "Salt Lake City, Utah, United States"
      },
      {
        fullName: "Russell M. Nelson",
        portrait: "images/Russel M Nelson.webp",
        dateOfBirth: "September 9, 1924",
        placeOfBirth: "Salt Lake City, Utah, United States"
      },
    ];
  

    // Add more prophet data here for the remaining prophets
    // Make sure to include a fullName and portrait for each one


document.addEventListener("DOMContentLoaded", function() {
    // Get the reference to the div where you want to append the cards
    const cardsContainer = document.getElementById('cards');

    // Loop through each prophet and create a card for them
    prophets.forEach(prophet => {
        // Create a section element
        const card = document.createElement('section');

        // Create an h2 element for the full name
        const fullName = document.createElement('h2');
        fullName.textContent = prophet.fullName;

        // Create an img element for the portrait
        const portrait = document.createElement('img');

        // Populate the image element with attributes
        portrait.setAttribute('src', prophet.portrait);
        portrait.setAttribute('alt', prophet.fullName + ' portrait');
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340'); // Set your desired width
        portrait.setAttribute('height', '440'); // Set your desired height

         // Create p elements for date and place of birth
      const dateOfBirth = document.createElement('p');
      dateOfBirth.textContent = "Date of Birth: " + prophet.dateOfBirth;

      const placeOfBirth = document.createElement('p');
      placeOfBirth.textContent = "Place of Birth: " + prophet.placeOfBirth;

      // Append the h2, img, date of birth, and place of birth elements to the section element
      card.appendChild(fullName);
      card.appendChild(portrait);
      card.appendChild(dateOfBirth);
      card.appendChild(placeOfBirth);

      // Append the card to the cards container
      cardsContainer.appendChild(card);
    });
  });
