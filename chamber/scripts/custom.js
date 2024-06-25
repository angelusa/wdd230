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


function toggleVisibility(section) {
	var gridSection = document.querySelector('.grid');
	var listSection = document.querySelector('#memberTable');
	var title = document.querySelector('#members-list');
	var featuretitle = document.querySelector('.featuretitle');

	if (section === 'list') {
		listSection.style.display = 'block';
		title.style.display = 'block';
		gridSection.style.display = 'none';
		featuretitle.style.display = 'none';
	} else if (section === 'grid') {
		listSection.style.display = 'none';
		title.style.display = 'none';
		gridSection.style.display = 'grid';
		featuretitle.style.display = 'block';
	}
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("joinForm").addEventListener("submit", function(event) {
        // Prevent the form from submitting normally
        event.preventDefault();
        
        // Get the form data
        var formData = new FormData(this);
        
        // Construct the URL for the thank you page
        var thankyouURL = "https://angelusa.github.io/wdd230/chamber/thankyou.html";
        
        // Redirect to the thank you page
        window.location.href = thankyouURL;
    });
});
