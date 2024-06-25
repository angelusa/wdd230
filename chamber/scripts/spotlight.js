const companies = [
  {
    name: "Logistics & Transport",
    address: "456 Oak Street, Los Angeles, CA 90001",
    phone: "+1 (213) 555-7890",
    email: "info@logistics-transport.com",
    url: "https://logistics-transport.com",
    img: "images/transport2.webp", // Corrected image path
    slogan: "Making moving easier in America",
    membership: "gold",
  },
  {
    name: "Legal Services",
    address: "789 Elm Street, San Francisco, CA 94101",
    phone: "+1 (415) 555-1234",
    email: "info@legal-services.com",
    url: "https://legal-services.com",
    img: "images/lawyer-logo.webp", // Corrected image path
    slogan: "Top-rated, go-to law firm in America",
    membership: "silver",
  },
  {
    name: "Marketing Consulting",
    address: "321 Maple Avenue, Sacramento, CA 95814",
    phone: "+1 (916) 555-6789",
    email: "info@marketing-consulting.com",
    url: "https://marketing-consulting.com",
    img: "images/mkt-logo.webp", // Corrected image path
    slogan: "Building your brand’s voice in America",
    membership: "silver",
  },
  {
    name: "Tech Innovations",
    address: "890 Pine Street, San Diego, CA 92101",
    phone: "+1 (619) 555-4321",
    email: "info@tech-innovations.com",
    url: "https://tech-innovations.com",
    img: "images/Tech Innovation.webp", // Corrected image path
    slogan: "Pioneering technology solutions in America",
    membership: "gold",
  },
  {
    name: "Financial Advisors",
    address: "567 Birch Lane, Palo Alto, CA 94301",
    phone: "+1 (650) 555-9876",
    email: "info@financial-advisors.com",
    url: "https://financial-advisors.com",
    img: "images/icons8-financial-advisor-64.webp", // Corrected image path
    slogan: "Guiding your financial future in America",
    membership: "gold",
  },
  {
    name: "Creative Agency",
    address: "234 Cedar Street, Santa Cruz, CA 95060",
    phone: "+1 (831) 555-2468",
    email: "info@creative-agency.com",
    url: "https://creative-agency.com",
    img: "images/creative company.webp", // Corrected image path
    slogan: "Inspiring creativity in America",
    membership: "silver",
  },
];

const spotlightCompanies = [];

function populateSpotlightCompanies() {
  companies.forEach((company) => {
    const cond1 = company.membership === "gold";
    const cond2 = company.membership === "silver";
    if (cond1 || cond2) {
      spotlightCompanies.push(company);
    }
  });
}

function displaySpotlightCompanies() {
  const container = document.querySelector(".spotlights-container");
  container.innerHTML = ""; 
  
  const filtered = spotlightCompanies.sort(() => Math.random() - 0.5).slice(3);
  filtered.forEach((company) => {
    displaySpotlight(company);
  });
}

function displaySpotlight(company) {
  const container = document.querySelector(".spotlights-container");

  const div = document.createElement("div");
  div.classList.add("spotlight");

  const htmlContent = `
        <h3>${company.name}</h3>
        <img 
        src="${company.img}" 
        alt="${company.name} Logo"
        height="80px">
        <p class="slogan">"${company.slogan}"</p>
        <p>
            ${company.phone} <br>
            ${company.email}
        </p>`;

  div.innerHTML = htmlContent;
  container.appendChild(div);
}

document.addEventListener("DOMContentLoaded", function() {
populateSpotlightCompanies();
displaySpotlightCompanies();
});