document.addEventListener("DOMContentLoaded", function () {
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const closeButtons = document.querySelectorAll(".close");

    loginBtn.addEventListener("click", function () {
        loginModal.style.display = "block";
    });

    registerBtn.addEventListener("click", function () {
        registerModal.style.display = "block";
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            loginModal.style.display = "none";
            registerModal.style.display = "none";
        });
    });

    window.addEventListener("click", function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target === registerModal) {
            registerModal.style.display = "none";
        }
    });

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Přihlášení úspěšné!");
        loginModal.style.display = "none";
    });

    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Registrace úspěšná!");
        registerModal.style.display = "none";
    });
});
