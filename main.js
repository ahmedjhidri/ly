// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll event listener for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    }
});

// Initialize AOS (Animate on Scroll)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
} 