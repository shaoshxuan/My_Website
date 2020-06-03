const splashScreen = document.querySelector(".splashScreen");

const menuBtn = document.querySelector(".menuHamburger");
const navLinks = document.querySelector("header ul");

// Splash Screen FadeOut
document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        splashScreen.classList.add("fadeOut");
        document.getElementsByTagName("body")[0].style.overflowY = "visible";
    }, 7000);
})

// Navigation Bar Fade onScroll
let scrollYOffset = 0;
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    if (window.pageYOffset > 0){
        if (window.pageYOffset > scrollYOffset){
            header.classList = "";
            header.classList.add("navFadeOut");
        } else {
            header.classList = "";
            header.classList.add("navFadeIn");
        }
        scrollYOffset = window.pageYOffset;
    } else {
        header.classList = "";
    }
    menuBtn.classList.remove("open");
    menuOpen = false;
    navLinks.style.right = "-500px";
})

// Hamburger Menu Animation
let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if (!menuOpen){
        menuBtn.classList.add("open");
        menuOpen = true;
        navLinks.style.right = "0";
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
        navLinks.style.right = "-500px";
    }
});