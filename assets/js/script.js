/* FILE: assets/js/script.js (TIDAK ADA PERUBAHAN) */

// 1. Fitur Toggle Password (Mata)
const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach(button => {
    button.addEventListener("click", function () {
        const passwordInput = this.previousElementSibling;
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        this.classList.toggle("fa-eye");
        this.classList.toggle("fa-eye-slash");
    });
});

// 2. Fitur Ganti Bendera
const countrySelect = document.getElementById("country-select");
const flagIcon = document.getElementById("flag-icon");

if (countrySelect && flagIcon) {
    countrySelect.addEventListener("change", function() {
        const country = this.value;
        flagIcon.src = `https://flagcdn.com/w40/${country}.png`;
    });
}