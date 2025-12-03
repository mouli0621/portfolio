import { createIcons, Menu, X, ArrowRight, Figma, Users, Code, Mail, Linkedin, Twitter, Dribbble, Heart } from 'lucide';

// Initialize Lucide Icons
createIcons({
  icons: {
    Menu,
    X,
    ArrowRight,
    Figma,
    Users,
    Code,
    Mail,
    Linkedin,
    Twitter,
    Dribbble,
    Heart
  }
});

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

let isMenuOpen = false;

mobileBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  navLinks.classList.toggle('active');
  
  // Update icon
  const iconName = isMenuOpen ? 'X' : 'Menu';
  // We need to re-render the icon or manually swap SVG content. 
  // Simplest way with Lucide createIcons in vanilla JS is to clear and re-append, 
  // but for simplicity here we can just toggle a class or swap innerHTML if we had raw SVGs.
  // Since createIcons replaces the <i> tag with an <svg>, we can't easily re-run it on the same element without resetting.
  // A quick fix for this vanilla implementation:
  mobileBtn.innerHTML = `<i data-lucide="${isMenuOpen ? 'x' : 'menu'}"></i>`;
  createIcons({ icons: { Menu, X }, nameAttr: 'data-lucide', attrs: {class: "lucide"} });
});

// Close menu when clicking a link
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    isMenuOpen = false;
    navLinks.classList.remove('active');
    mobileBtn.innerHTML = `<i data-lucide="menu"></i>`;
    createIcons({ icons: { Menu }, nameAttr: 'data-lucide' });
  });
});

// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Select elements to animate
const animatedElements = document.querySelectorAll('.skill-card, .project-card, .about-image, .about-text');

animatedElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  observer.observe(el);
});

// Header Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(15, 17, 21, 0.95)';
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
  } else {
    navbar.style.backgroundColor = 'rgba(15, 17, 21, 0.8)';
    navbar.style.boxShadow = 'none';
  }
});
