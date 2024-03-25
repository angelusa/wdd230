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
if (hamburgerButton) {
    hamburgerButton.onclick = toggleMenu;
}

const banner = document.querySelector(".banner");
if (banner && currentDate.getDay() <= 2 && currentDate.getDay() > 0) {
    banner.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var currentDateMs = currentDate.getTime();
    var lastVisitDateMs = localStorage.getItem("lastVisitDate");
  
    if (!lastVisitDateMs) {
        document.getElementById("sidebar").innerText = "Welcome! Let us know if you have any questions.";
    } else {
        var differenceMs = currentDateMs - parseInt(lastVisitDateMs);
        var oneDayMs = 1000 * 60 * 60 * 24;
  
        if (differenceMs < oneDayMs) {
            document.getElementById("sidebar").innerText = "Back so soon! Awesome!";
        } else {
            var differenceDays = Math.floor(differenceMs / oneDayMs);
            var message = (differenceDays === 1) ? "day" : "days";
  
            document.getElementById("sidebar").innerText = "You last visited " + differenceDays + " " + message + " ago.";
        }
    }
  
    localStorage.setItem("lastVisitDate", currentDateMs);
});
