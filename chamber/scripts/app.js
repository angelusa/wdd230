const darkModeToggle = document.querySelector("#darkModeToggle");
const body = document.querySelector("body");
const main = document.querySelector("main");

darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        main.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        main.classList.remove('dark-mode');
    }
});