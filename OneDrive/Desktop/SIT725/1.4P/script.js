// Change the heading text
function changeText() {
    document.getElementById("heading").innerText = "JavaScript is Awesome!";
}

// Counter logic
let count = 0;
function increaseCounter() {
    count++;
    document.getElementById("counter").innerText = count;
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
}
