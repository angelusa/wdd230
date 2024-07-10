document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        event.preventDefault();
        document.getElementById('passwordMatchError').style.display = 'block';
    }
});