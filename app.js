const allNavItems = document.querySelectorAll(".nav-item");
const navbar = document.querySelector(".navbar-collapse");

allNavItems.forEach((item) =>
    item.addEventListener("click", () => {
        navbar.classList.toggle("show");
    })
);

// ****** scrollup ******
//display btn
window.addEventListener("scroll", function () {
    let scroll = this.document.querySelector(".scrolltop");
    scroll.classList.toggle("active", window.scrollY > 300);
});
// scrollup
const btn = document.querySelector(".scrolltop");
btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// ****** cookies ******
// *** cookie modal ***
let cookieModal = document.querySelector("#cookieModal");
let acceptCookie = document.querySelector("#acceptCookie");
let cancelCookie = document.querySelector("#refusedCookie");
//
cancelCookie.addEventListener("click", function () {
    cookieModal.classList.remove("active");
});
//
acceptCookie.addEventListener("click", function () {
    let d = new Date();
    d.setMinutes(2 + d.getMinutes());
    document.cookie = "PortfolioCvDevBootstrap=true; expires = ' + d + ';";
    cookieModal.classList.remove("active");
});

// check cookie exist
const checkCookie = () => {
    let input = document.cookie.split("=");
    if (input[0] == "PortfolioCvDevBootstrap") {
        cookieModal.classList.remove("active");
    } else {
        cookieModal.classList.add("active");
    }
};
// check cookie exist page already load
window.onload = () => {
    setTimeout(() => {
        checkCookie();
    }, 1000);
};
