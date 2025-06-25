// Smooth scrolling navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
        }
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

const typewriter = document.querySelector('.typewriter');
if (typewriter) {
    const text = 'Game Developer';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                typewriter.textContent = '';
                i = 0;
                typeWriter();
            }, 2000);
        }
    }
    
    typeWriter();
}

// Animate skill bars
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress');
            const percentage = progressBar.getAttribute('data-percentage');
            progressBar.style.width = percentage + '%';
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.5
});

document.querySelectorAll('.skill-item').forEach(skill => {
    observer.observe(skill);
});

// Social media links
const socialLinks = {
    github: 'https://github.com/shalonjovan',
    linkedin: 'https://www.linkedin.com/in/shalon-jovan-b2aa88329/',
    itchio: 'https://caccat.itch.io/'
};

document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = icon.classList.contains('github') ? 'github' :
                        icon.classList.contains('linkedin') ? 'linkedin' :
                        icon.classList.contains('itchio') ? 'itchio' : null;
        
        if (platform && socialLinks[platform]) {
            window.open(socialLinks[platform], '_blank');
        }
    });
});

// Project links
const projectLinks = {
    'wreaky-ball': 'https://shalonjovan.github.io/Wreaky_ball/',
    'shooter-ball': 'https://github.com/shalonjovan/Ball_Shooter',
    'track-it': 'https://drive.google.com/drive/folders/13KfjTa7dhDsK0p6W6iRcwGjpdJjx_zYd?usp=sharing',
    'poker': 'https://drive.google.com/drive/folders/1QVCdFsclvvsvwCUpViVVMpnzZhZQ4h06?usp=drive_link',
    'frontend-designs': 'https://github.com/shalonjovan/Front-end'
};

document.querySelectorAll('.project-card').forEach(card => {
    const projectId = card.getAttribute('data-project');
    if (projectId && projectLinks[projectId]) {
        card.addEventListener('click', () => {
            window.open(projectLinks[projectId], '_blank');
        });
        card.style.cursor = 'pointer';
    }
});

if (contactForm) {
        try {
            
        } 

;
}

// Scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Counter animation for stats
const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const current = parseInt(counter.textContent);
        const increment = target / 200; // Adjust speed here
        
        if (current < target) {
            counter.textContent = Math.ceil(current + increment);
            setTimeout(() => animateCounters(), 10);
        } else {
            counter.textContent = target;
        }
    });
};

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
    
    // Trigger initial animations
    document.body.classList.add('loaded');
});

// Add smooth reveal animations for sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = 100;
        
        if (sectionTop < window.innerHeight - sectionVisible) {
            section.classList.add('reveal-active');
        }
    });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
});