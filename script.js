// Change the background color of the nav when scrolling
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.fixed-nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#222';
    } else {
        nav.style.backgroundColor = '#333';
    }
});

// Add 'active' class to the current section link when scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
