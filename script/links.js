const baseURL = "https://angleusa.github.io/wdd230/";
const linksURL = "https://angleusa.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
      const response = await fetch(linksURL);
      const data = await response.json();
      displayLinks(data);
    } catch (error) {
      console.error("Error fetching links data:", error);
    }
  }
  
  function displayLinks(data) {
    const linksContainer = document.getElementById("cards");
  
    data.forEach(week => {
      const weekDiv = document.createElement("div");
      weekDiv.classList.add("week");
  
      const weekHeader = document.createElement("h2");
      weekHeader.textContent = `Week ${week.week}`;
      weekDiv.appendChild(weekHeader);
  
      const linksList = document.createElement("ul");
  
      week.links.forEach(link => {
        const linkItem = document.createElement("li");
        const linkAnchor = document.createElement("a");
        linkAnchor.textContent = link.title;
        linkAnchor.href = baseURL + link.url;
  
        linkItem.appendChild(linkAnchor);
        linksList.appendChild(linkItem);
      });
  
      weekDiv.appendChild(linksList);
      linksContainer.appendChild(weekDiv);
    });
  }
  
  getLinks();
  