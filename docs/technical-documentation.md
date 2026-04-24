# Technical Documentation

## Project Overview

This project is a front-end personal portfolio website developed for Assignment 4.

The website was enhanced with interactive JavaScript features, external API integration, local data storage, responsive layouts, and improved user experience.

The system demonstrates practical front-end development skills through a real portfolio application.

---

## Main Objectives

This project demonstrates:

- External API integration
- JavaScript interactivity
- State management using localStorage
- User feedback handling
- Responsive web design
- Form validation
- Dynamic content rendering

---

## File Structure

```text
assignment4/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── cv.pdf
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── .gitignore
└── README.md
File Descriptions
index.html

Contains the full structure of the website including:

Navigation bar
Hero section
About section
Projects section
GitHub repositories section
Skills section
Achievements section
Contact form
Footer
css/styles.css

Responsible for visual styling including:

Layout structure
Typography
Buttons and cards
Colors and themes
Dark mode design
Responsive behavior
Hover effects
Animations
js/script.js

Responsible for functionality including:

Dark mode toggle
localStorage theme saving
Typing animation
Contact form validation
Project filtering
GitHub API fetch requests
Repository sorting
Fade-in scroll effects
Implemented Features
1. Dark Mode

Users can switch between light and dark mode.

Theme preference is saved using localStorage and restored automatically.

2. Project Filtering

Projects can be filtered by category:

All
UI
VB
3. GitHub API Integration

Repositories are loaded dynamically from GitHub using:

https://api.github.com/users/anwar37x/repos

Displayed data:

Repository name
Updated date
Direct link
4. Contact Form Validation

The form validates:

Empty fields
Email format

Users receive success or error feedback messages.

5. Typing Animation

The Hero section includes animated typing text for improved visual presentation.

6. Scroll Animations

Sections appear smoothly when scrolling using fade-in effects.

Responsive Design

The website is optimized for:

Desktop devices
Tablets
Mobile devices

Responsive techniques used:

CSS Grid
Flexbox
Media Queries
Error Handling

Implemented feedback includes:

Invalid email warning
Empty form warning
GitHub API loading failure message
No projects found message
Performance Considerations

The project was optimized using:

Lightweight static files
Efficient CSS structure
Minimal JavaScript overhead
Fast browser rendering
Browser Compatibility

Tested on:

Google Chrome
Microsoft Edge
Firefox
Future Improvements

Possible future upgrades:

Backend contact system
Multi-language support
Search repositories feature
Analytics dashboard
Advanced animations
