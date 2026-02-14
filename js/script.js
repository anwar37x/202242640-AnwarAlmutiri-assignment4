// Dark Mode
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Form Alert
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you. Your message has been received.");
});
