// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Search Toggle
const searchToggle = document.querySelector('.search-toggle');
const searchOverlay = document.querySelector('.search-overlay');
const searchClose = document.querySelector('.search-close');
const searchInput = document.querySelector('.search-input');

if (searchToggle) {
    searchToggle.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        searchInput.focus();
    });
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });
}

// Close search overlay when clicking outside
if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
        }
    });
}

// Hero Slider
const slides = document.querySelectorAll('.hero-slider .slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initialize slider
if (slides.length > 0) {
    showSlide(0);
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#login' || href === '#register') {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Top Button
const topBtn = document.querySelector('.top-btn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        topBtn.classList.add('visible');
    } else {
        topBtn.classList.remove('visible');
    }
});

if (topBtn) {
    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// News Card Click Effect
const newsCards = document.querySelectorAll('.news-card');
newsCards.forEach(card => {
    card.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Sermon Card Click Effect
const sermonCards = document.querySelectorAll('.sermon-card');
sermonCards.forEach(card => {
    card.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in effect
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Form Validation (if forms are added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ff0000';
        } else {
            input.style.borderColor = '';
        }
    });

    return isValid;
}

// Lazy Loading for Images (if images are added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Console Welcome Message
console.log('%c늘사랑교회 홈페이지에 오신 것을 환영합니다!', 'color: #2c5f2d; font-size: 16px; font-weight: bold;');
console.log('%c교회 주소: 경기도 고양시 일산서구 송포로 113번길 63-28', 'color: #666; font-size: 12px;');
console.log('%c전화번호: 031-812-6633', 'color: #666; font-size: 12px;');
