document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

document.querySelectorAll('.project-card').forEach(card => {
    const video = card.querySelector('video');

    card.addEventListener('click', async () => {
        if (card.classList.contains('flipped')) {
            video.pause();
            card.classList.remove('flipped');
        } else {
            try {
                await video.play();
                card.classList.add('flipped');
            } catch (err) {
                console.error("Video playback failed:", err);
            }
        }
    });
});



