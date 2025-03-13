function changeText() {
    let heading = document.getElementById("heading");
    heading.style.opacity = 0;
    setTimeout(() => {
        heading.innerText = "JavaScript is Awesome!";
        heading.style.opacity = 1;
    }, 300);
}
