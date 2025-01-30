document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "rotateY(10deg)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateY(0deg)";
        });
    });
});
