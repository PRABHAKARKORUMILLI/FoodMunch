document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("navbarNav");

    /* OPEN */
    nav.addEventListener("show.bs.collapse", () => {
        menuBtn.classList.add("open");
    });

    /* CLOSE */
    nav.addEventListener("hidden.bs.collapse", () => {
        menuBtn.classList.remove("open");
    });

    /* CLOSE ON LINK CLICK */
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (nav.classList.contains("show")) {
                menuBtn.click();
            }
        });
    });
    /* =========================
   ACTIVE LINK (CLICK)
========================= */
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function () {
        document.querySelectorAll(".nav-link").forEach(l => {
            l.classList.remove("active");
        });
        this.classList.add("active");
    });
});


/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


/* =========================
   LOAD MORE MENU
========================= */
const cards = document.querySelectorAll(".menu-card");
const loadBtn = document.getElementById("loadMoreBtn");

let visible = 6;

if (cards.length && loadBtn) {

    cards.forEach((card, index) => {
        if (index >= visible) card.style.display = "none";
    });

    loadBtn.addEventListener("click", () => {
        visible += 3;

        cards.forEach((card, index) => {
            if (index < visible) card.style.display = "block";
        });

        if (visible >= cards.length) {
            loadBtn.style.display = "none";
        }
    });
}


/* =========================
   ACTIVE LINK ON SCROLL
========================= */
window.addEventListener("scroll", () => {

    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-link");

    let current = "";

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 120;
        let height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

});
