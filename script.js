

const element = document.querySelector("h1");

element.addEventListener("animationend", function () {
    element.classList.add("hidden");
});