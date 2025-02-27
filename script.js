document.addEventListener("DOMContentLoaded", function () {
    const blowButton = document.getElementById("blowButton");
    const flame = document.getElementById("flame");

    // Munculkan tombol setelah api menyala
    setTimeout(() => {
        blowButton.classList.remove("hidden");
    }, 8000);

    // Fungsi untuk meniup lilin
    blowButton.addEventListener("click", function () {
        flame.style.animation = "none"; // Hentikan animasi api
        flame.style.opacity = "0"; // Matikan api
        blowButton.textContent = "LILIN DITIUP!";
        blowButton.disabled = true;
    });
});});