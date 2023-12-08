const forms = document.getElementsByClassName("needs-validation");
Array.from(forms).forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        e.stopPropagation();
        form.classList.add("was-validated");
    });
});

// const mainNavbar = document.getElementById("mainNavbar");

// window.addEventListener("scroll", () => {
//     const maxScrollHeight = 694;
//     const windowScrollHeight = window.scrollY;

//     if (windowScrollHeight >= maxScrollHeight) {
//         mainNavbar.classList.add("active");
//     } else {
//         mainNavbar.classList.remove("active");
//     }
// });