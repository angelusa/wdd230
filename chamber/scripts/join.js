document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('formLoadedTime').value = new Date().toISOString();

    document.getElementById('joinForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Redirect to the thank you page
        window.location.href = "https://angelusa.github.io/wdd230/chamber/thankyou.html";
    });
});
