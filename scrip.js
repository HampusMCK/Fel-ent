const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const column = document.querySelector(".column")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

column.addEventListener("click", () => {
    column.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}))