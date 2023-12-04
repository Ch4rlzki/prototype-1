const mainNavbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
    const maxScrollHeight = 907;
    const windowScrollHeight = window.scrollY;

    if (windowScrollHeight >= maxScrollHeight) {
        mainNavbar.classList.add("active");
    } else {
        mainNavbar.classList.remove("active");
    }
});