document.addEventListener("DOMContentLoaded", function() {
    // Set the hidden field with the current date and time
    document.getElementById('formLoadedTime').value = new Date().toISOString();

    // Add an event listener for the form submission
    document.getElementById('joinForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Redirect to the thank you page
        window.location.href = "https://angelusa.github.io/wdd230/chamber/thankyou.html";
    });
});