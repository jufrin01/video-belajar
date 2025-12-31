/* FILE: assets/js/script.js */

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

// 2. Fitur Ganti Bendera (Halaman Register)
const countrySelect = document.getElementById("country-select");
const flagIcon = document.getElementById("flag-icon");

if (countrySelect && flagIcon) {
    countrySelect.addEventListener("change", function() {
        const country = this.value;
        flagIcon.src = `https://flagcdn.com/w40/${country}.png`;
    });
}

// 3. Fitur Login Dummy (BARU DITAMBAHKAN)
// Kita cari form yang ada di dalam .login-card
const loginForm = document.querySelector(".login-card form");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Mencegah halaman reload otomatis

        // Ambil nilai input dari form
        const emailInput = this.querySelector('input[type="email"]');
        const passwordInput = this.querySelector('input[type="password"]');

        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        // --- DATA AKUN DUMMY ---
        const validEmail = "jufrin@gmail.com";
        const validPassword = "123";

        // Cek apakah email dan password cocok
        if (emailValue === validEmail && passwordValue === validPassword) {
            // JIKA BENAR
            alert("✅ Login Sukses! Selamat datang, Jufrin.");
            window.location.href = "home.html"; // Pindah ke halaman Home
        } else {
            // JIKA SALAH
            alert("❌ Login Gagal! Email atau Password salah.\n\nTips: Gunakan email 'jufrin@gmail.com' dan password '123'");
        }
    });
}