// ===============================
// DARK MODE + LOCAL STORAGE
// ===============================
const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// ===============================
// TYPING ANIMATION
// ===============================
const text = "Designing clean, user-focused digital experiences.";
const typingText = document.getElementById("typingText");

let i = 0;

function typeEffect() {
    if (typingText && i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 45);
    }
}

typeEffect();

// ===============================
// CONTACT FORM VALIDATION
// ===============================
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector("textarea");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        message.value.trim() === ""
    ) {
        msg.textContent = "Please fill in all fields.";
        msg.style.color = "red";
        return;
    }

    if (!emailPattern.test(email.value)) {
        msg.textContent = "Please enter a valid email address.";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Message sent successfully!";
    msg.style.color = "green";

    form.reset();
});

// ===============================
// FILTER PROJECTS
// ===============================
function filterProjects(category) {
    const cards = document.querySelectorAll(".project-card[data-category]");
    const noResults = document.getElementById("noResults");

    let visibleCount = 0;

    cards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    noResults.textContent =
        visibleCount === 0 ? "No projects found." : "";
}

// ===============================
// FADE-IN ON SCROLL
// ===============================
const elements = document.querySelectorAll(".fade-in");

function revealOnScroll() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===============================
// GITHUB REPOSITORIES
// ===============================
let reposData = [];

async function loadRepos() {
    const repoList = document.getElementById("repoList");

    repoList.innerHTML = "<p>Loading repositories...</p>";

    try {
        const response = await fetch(
            "https://api.github.com/users/anwar37x/repos?sort=updated&per_page=6"
        );

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error();
        }

        reposData = data.filter(repo => !repo.fork);

        displayRepos(reposData);

    } catch (error) {

        reposData = [
            {
                name: "Assignment 4 Portfolio",
                updated_at: "2026-04-25",
                html_url: "https://github.com/anwar37x/202242640-AnwarAlmutiri-assignment4"
            },
            {
                name: "Assignment 3 Portfolio",
                updated_at: "2026-04-22",
                html_url: "https://github.com/anwar37x/202242640--AnwarAlmutairi-assignment3"
            },
            {
                name: "Assignment 2 Portfolio",
                updated_at: "2026-04-18",
                html_url: "https://github.com/anwar37x/202242640-anwaralmutairi-assignment2"
            }
        ];

        displayRepos(reposData);
    }
}

loadRepos();

// ===============================
// DISPLAY REPOSITORIES
// ===============================
function displayRepos(repos) {
    const repoList = document.getElementById("repoList");

    repoList.innerHTML = "";

    repos.forEach((repo, index) => {
        setTimeout(() => {
            repoList.innerHTML += `
            <div class="project-card fade-in show">
                <h3>${repo.name}</h3>
                <p>Updated: ${repo.updated_at.slice(0,10)}</p>
                <a href="${repo.html_url}" target="_blank">
                    View Repository
                </a>
            </div>
            `;
        }, index * 250);
    });
}

// ===============================
// SORT REPOSITORIES
// ===============================
function sortReposAZ() {
    reposData.sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    displayRepos(reposData);
}

function sortReposZA() {
    reposData.sort((a, b) =>
        b.name.localeCompare(a.name)
    );

    displayRepos(reposData);
}