// Splash Screen FadeOut
const splashScreen = document.querySelector(".splashScreen");

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
})