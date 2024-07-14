$(document).ready(function() {
    // Show About tab by default
    const aboutTab = document.getElementById('about_tab');
    const projectsTab = document.getElementById('projects_tab');
    const contactTab = document.getElementById('contact_tab');

    // Set default tab visibility
    aboutTab.style.display = 'none';
    projectsTab.style.display = 'none';
    contactTab.style.display = 'none';

    const about = document.getElementById('about');
    const projects = document.getElementById('projects');
    const contact = document.getElementById('contact');

    // Show About tab
    about.addEventListener('click', function() {
        aboutTab.style.display = 'block';
        projectsTab.style.display = 'none';
        contactTab.style.display = 'none';
    });

    // Show Projects tab
    projects.addEventListener('click', function() {
        aboutTab.style.display = 'none';
        projectsTab.style.display = 'block';
        contactTab.style.display = 'none';
    });

    // Show Contact tab
    contact.addEventListener('click', function() {
        aboutTab.style.display = 'none';
        projectsTab.style.display = 'none';
        contactTab.style.display = 'block';
    });
});
