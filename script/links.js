const baseURL = "https://angelusa.github.io/wdd230/data/links.json";


async function getLinks(baseURL) {
  const response = await fetch(baseURL);
  const data = await response.json();
  console.log(data)
  renderLink(data.lessons)
}

function linkTemplate(data) {
    
  const link1 = data.links[0] || {};
  const link2 = data.links[1] || {};
  return `<li>lesson ${data.lesson}:<a href="${link1.url || ''}">${link1.title || ''}</a> | <a href="${link2.url || ''}">${link2.title || ''}</a></li>`;
}
function renderLink(data) {
  const htmlItems = data.map(linkTemplate); // Map each lesson data to HTML
  const selector = document.getElementById("activityList");
  
 selector.innerHTML = htmlItems.join(""); // Join HTML items and render into the specified DOM element
}
getLinks(baseURL);