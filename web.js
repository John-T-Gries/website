document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

document.querySelectorAll(".project-card").forEach(card => {
    const video = card.querySelector("video");
    card.addEventListener("mouseenter", () => {
        video.currentTime = 0;
        video.play();
    });
    card.addEventListener("mouseleave", () => {
        video.pause();
    });
});
