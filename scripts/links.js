document.addEventListener("DOMContentLoaded", function () {
    const baseURL = "https://angelusa.github.io/wdd230/";
    const linksURL = `${baseURL}data/links.json`;
  
    async function getLinks() {
      try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    function displayLinks(weeks) {
      const activitiesSection = document.querySelector('.activities');
      activitiesSection.innerHTML = ''; // Clear existing content
  
      weeks.weeks.forEach(week => {
        const weekElement = document.createElement('div');
        weekElement.classList.add('week');
  
        const weekTitle = document.createElement('h3');
        weekTitle.textContent = week.week;
        weekElement.appendChild(weekTitle);
  
        const linksList = document.createElement('ul');
  
        week.links.forEach((link, index) => {
          const listItem = document.createElement('li');
          const anchor = document.createElement('a');
          anchor.href = link.url;
          anchor.textContent = link.title;
          listItem.appendChild(anchor);
          linksList.appendChild(listItem);
        });
  
        weekElement.appendChild(linksList);
        activitiesSection.appendChild(weekElement);
      });
    }
  
    getLinks();
  });
  