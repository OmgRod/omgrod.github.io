document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check for saved theme in local storage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && savedTheme === "dark") {
        body.classList.add("dark-mode");
    }

    // Toggle theme
    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        // Save the theme preference to local storage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.removeItem("theme");
        }
    });
});
