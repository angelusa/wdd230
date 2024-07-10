// close the banner
function closeBanner() {
    document.getElementById("banner").style.display = "none";
}

// get the current day of the week
function getDayOfWeek() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return days[today.getDay()];
}

// Check if the current day is Monday, Tuesday, or Wednesday ...
const currentDay = getDayOfWeek();
if (currentDay === 'Monday' || currentDay === 'Tuesday' || currentDay === 'Wednesday' || currentDay === 'Saturday') {
    document.getElementById("banner").style.display = "block";
}