# Technical Documentation

## Project Overview
This project is a responsive and interactive personal portfolio website developed as part of Assignment 2.  
It builds on Assignment 1 by adding dynamic features, data handling, and improved user experience using JavaScript.

---

## System Architecture

The project follows a simple front-end architecture:

- **HTML (index.html)** → Defines the structure of the website  
- **CSS (styles.css)** → Handles styling, layout, and responsive design  
- **JavaScript (script.js)** → Implements interactivity and dynamic behavior  

---

## Features Implementation

### 1. Dynamic Content (Project Filtering)
A filtering feature was implemented to allow users to display projects based on category.

- Each project card includes a `data-category` attribute
- JavaScript dynamically shows or hides projects based on user selection
- A message is displayed if no projects match the selected filter

Example:
```javascript
function filterProjects(category) {
    const projects = document.querySelectorAll(".project-card");

    projects.forEach(project => {
        if (category === "all" || project.dataset.category === category) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}