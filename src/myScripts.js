// Fade Out Splash Screen
document.addEventListener("DOMContentLoaded", () => {
    const splash = document.querySelector(".splashScreen");
    const content = document.querySelector(".content");
    setTimeout(() => {
        content.style.display = "block";
        splash.classList.add("fadeBack");
    }, 5000);
});

// Open Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
    const menuBox = document.querySelector(".hamburgerContainer");
    const menu = document.querySelector(".hamburgerMenu");
    const nav = document.querySelector("nav");
    menuBox.addEventListener("click", () => {
        menu.classList.toggle("open");
        nav.classList.toggle("open");
    })
});

// Navigation Bar Fade onScroll
let scrollYOffset = 0;
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const menu = document.querySelector(".hamburgerMenu");
    const bttBtn = document.querySelector(".backToTop");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 0){
            bttBtn.classList.remove("top");
            if (window.pageYOffset > scrollYOffset){
                nav.classList = "";
                nav.classList.add("scrollDown");
                menu.classList.remove("open");
            } else {
                nav.classList = "";
                nav.classList.add("scrollUp");
                menu.classList.remove("open");
            }
            scrollYOffset = window.pageYOffset;
        } else {
            nav.classList = "";
            bttBtn.classList.add("top");
        }
    })
})

window.onload = () => {
    window.history.pushState({}, document.title, "/");
}