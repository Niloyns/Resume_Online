// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    const skillItems = document.querySelectorAll('#skills ul li');
    const projectItems = document.querySelectorAll('#projects ul li');
    const projectLinks = document.querySelectorAll('#projects ul li a');
    const footer = document.querySelector('footer');

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            body.classList.add('dark-mode');
            header.classList.add('dark-mode');
            links.forEach(link => link.classList.add('dark-mode'));
            sections.forEach(section => section.classList.add('dark-mode'));
            skillItems.forEach(item => item.classList.add('dark-mode'));
            projectItems.forEach(item => item.classList.add('dark-mode'));
            projectLinks.forEach(link => link.classList.add('dark-mode'));
            footer.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            header.classList.remove('dark-mode');
            links.forEach(link => link.classList.remove('dark-mode'));
            sections.forEach(section => section.classList.remove('dark-mode'));
            skillItems.forEach(item => item.classList.remove('dark-mode'));
            projectItems.forEach(item => item.classList.remove('dark-mode'));
            projectLinks.forEach(link => link.classList.remove('dark-mode'));
            footer.classList.remove('dark-mode');
        }
    });
});
