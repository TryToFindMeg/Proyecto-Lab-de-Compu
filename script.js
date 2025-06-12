
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".gallery img").forEach(img => {
        img.classList.add("show");
    });
});

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("clicked");
    });
});