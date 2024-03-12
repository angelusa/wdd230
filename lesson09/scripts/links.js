const baseURL = "https://angleusa.github.io/wdd230/";
const linksURL = "https://angelusa.github.io/wdd230/data/links.json";


// links.js

function displayLinks(data) {
  const linksContainer = document.getElementById('cards');

  data.links.forEach(lesson => {
    // existing code for creating sections and links
  });
}
 
try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("Error fetching links:", error);
  }


function displayLinks(data) {
  const linksContainer = document.getElementById('cards');

  data.links.forEach(lesson => {
    const lessonNumber = lesson.lesson;
    const lessonLinks = lesson.links;

    const lessonSection = document.createElement('section');
    const lessonHeading = document.createElement('h2');
    lessonHeading.textContent = `Lesson ${lessonNumber}`;
    lessonSection.appendChild(lessonHeading);

    const linksList = document.createElement('ul');

    lessonLinks.forEach(link => {
      const linkUrl = link.url;
      const linkTitle = link.title;

      const linkItem = document.createElement('li');
      const linkAnchor = document.createElement('a');
      linkAnchor.textContent = linkTitle;
      linkAnchor.href = baseURL + linkUrl;

      linkItem.appendChild(linkAnchor);
      linksList.appendChild(linkItem);
    });

    lessonSection.appendChild(linksList);
    linksContainer.appendChild(lessonSection);
  });
}

getLinks();

