window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    const fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach(function(element) {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight / 1.2;

        if (position < screenHeight) {
            element.classList.add('visible');
        }
    });
});
