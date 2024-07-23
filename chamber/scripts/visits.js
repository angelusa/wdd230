document.addEventListener('DOMContentLoaded', function() {
    // Visit message logic (only for discovery.html)
    if (document.getElementById('visit-message')) {
        var visitMessage = document.getElementById('visit-message');
        var lastVisit = localStorage.getItem('lastVisit');
        var currentVisit = Date.now();
        var currentDate = new Date(currentVisit).toLocaleDateString();

        console.log('Current Visit:', currentVisit);
        console.log('Last Visit:', lastVisit);

        if (!lastVisit) {
            visitMessage.textContent = 'Welcome! Let us know if you have any questions. Today\'s date is ' + currentDate;
        } else {
            var timeDiff = currentVisit - lastVisit;
            var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            var lastVisitDate = new Date(parseInt(lastVisit)).toLocaleDateString();

            console.log('Time Difference:', timeDiff);
            console.log('Days Difference:', daysDiff);

            if (daysDiff < 1) {
                visitMessage.textContent = 'Back so soon! Awesome! ' + currentDate;
            } else if (daysDiff === 1) {
                visitMessage.textContent = 'You last visited 1 day ago on ' + lastVisitDate + '. Today\'s date is ' + currentDate;
            } else {
                visitMessage.textContent = 'You last visited ' + daysDiff + ' days ago on ' + lastVisitDate + '. Today\'s date is ' + currentDate;
            }
        }

        localStorage.setItem('lastVisit', currentVisit);
    }

    // Display last modified date
    const lastModifiedSpan = document.querySelector('.last-modified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // Display current year
    const currentYearSpan = document.querySelector('.current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});