// Smooth Scrolling for Internal Links
document.addEventListener('DOMContentLoaded', function() {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;

    document.querySelectorAll('.navbar a[href^="#"], .hero-buttons a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            var targetElement = document.querySelector(this.getAttribute('href'));
            var targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});

