    // ================= SCROLL ANIMATION =================
    const elements = document.querySelectorAll(".card, .hero, h2");

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add("show");
        }
    });
    }, {
    threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));


    // ================= BOTÃO HERO =================
    const btn = document.querySelector(".hero button");

    btn.addEventListener("click", () => {
    showNotification("🚀 Explorando catálogo...");
    });


    // ================= NOTIFICAÇÃO =================
    function showNotification(message) {
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerText = message;

    document.body.appendChild(notif);

    setTimeout(() => {
        notif.classList.add("show");
    }, 100);

    setTimeout(() => {
        notif.classList.remove("show");
        setTimeout(() => notif.remove(), 300);
    }, 3000);
    }


    // ================= CARD HOVER INTERAÇÃO =================
    document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

    card.addEventListener("click", () => {
        showNotification("🎮 Você selecionou: " + card.querySelector("h3").innerText);
    });
    });


    // ================= NAV CLICK SUAVE =================
    document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const id = link.getAttribute("href").replace("#", "");
        const section = document.getElementById(id);

        section.scrollIntoView({
        behavior: "smooth"
        });

        showNotification("📍 Indo para " + id);
    });
    });