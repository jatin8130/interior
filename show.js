const hamburger = document.querySelector(".burger");
const bar = document.querySelector(".menu-bar");
const cross = document.querySelector(".cross");

hamburger.addEventListener("click", () => {
    bar.classList.toggle("active");
    hamburger.classList.toggle("active");
    cross.classList.toggle("active");
})

cross.addEventListener("click", () => {
    bar.classList.remove("active");
    hamburger.classList.toggle("active");
    cross.classList.remove("active");
})

document.querySelectorAll(".menu").forEach(n => n.addEventListener("click", () => {
    cross.classList.remove("active");
    bar.classList.remove("active");
    hamburger.className.remove("active");
}))