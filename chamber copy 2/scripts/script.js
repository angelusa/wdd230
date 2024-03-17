const currentDate = new Date();

const fullDate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(currentDate);
document.querySelector(".date").innerHTML = fullDate;

const currentYear = currentDate.getFullYear();
document.querySelector(".current-year").innerHTML = currentYear;

const lastModified = document.lastModified;
document.querySelector(".last-modified").innerHTML = lastModified;

function toggleMenu() {
	document.getElementById("primary-nav").classList.toggle("open");
	document.getElementById("ham-btn").classList.toggle("open");
}

const hamburgerButton = document.getElementById("ham-btn");
hamburgerButton.onclick = toggleMenu;

const banner = document.querySelector(".banner");
if (currentDate.getDay() <= 2 && currentDate.getDay() > 0) {
	banner.style.display = "block";
}


document.addEventListener("DOMContentLoaded", function() {
	// Get the current date
	var currentDate = new Date();
	var currentDateMs = currentDate.getTime(); // Convert to milliseconds
  
	// Get the last visit date from localStorage
	var lastVisitDateMs = localStorage.getItem("lastVisitDate");
  
	if (!lastVisitDateMs) {
	  // If this is the user's first visit
	  document.getElementById("sidebar").innerText = "Welcome! Let us know if you have any questions.";
	} else {
	  // Calculate the difference in milliseconds between the current date and the last visit date
	  var differenceMs = currentDateMs - parseInt(lastVisitDateMs);
	  var oneDayMs = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
  
	  if (differenceMs < oneDayMs) {
		// If less than a day has passed since the last visit
		document.getElementById("sidebar").innerText = "Back so soon! Awesome!";
	  } else {
		// Calculate the difference in days
		var differenceDays = Math.floor(differenceMs / oneDayMs);
		var message = (differenceDays === 1) ? "day" : "days"; // Singular or plural form
  
		// Display the message with the number of days since the last visit
		document.getElementById("sidebar").innerText = "You last visited " + differenceDays + " " + message + " ago.";
	  }
	}
  
	// Update the last visit date in localStorage
	localStorage.setItem("lastVisitDate", currentDateMs);
  });
  