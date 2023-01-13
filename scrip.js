const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const column = Array.from(document.querySelectorAll(".column"));

console.log(column);

column.forEach((col) => {
    col.addEventListener("click", () => {
        column.forEach((c) => { c.classList.remove("active"); });
        col.classList.add("active");
    });
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))