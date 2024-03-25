// fetch.js
const dataURL = "https://angelusa.github.io/wdd230/data/links.json";

async function fetchData() {
  try {
    const response = await fetch(dataURL);
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();