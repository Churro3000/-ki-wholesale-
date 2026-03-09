// =============================================
// script.js - JavaScript logic
// =============================================

// Tailwind custom config (orange primary color)
tailwind.config = {
    content: [],
    theme: {
        extend: {
            colors: {
                primary: '#f97316'
            }
        }
    }
};

// Fake search function (placeholder)
function performSearch() {
    const query = document.getElementById('search')?.value;
    if (query) {
        alert('Searching for: ' + query + '\n\n(In full version this would show results)');
    }
}

// Simple HTML include helper (used in index.html)
async function loadFragment(url, targetId) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Fragment load failed');
        const html = await response.text();
        document.getElementById(targetId).innerHTML = html;
    } catch (err) {
        console.error('Error loading ' + url, err);
        document.getElementById(targetId).innerHTML = '<p style="color:red">Failed to load section</p>';
    }
}

// Load all fragments when page is ready
document.addEventListener('DOMContentLoaded', () => {
    loadFragment('header.html',        'header-placeholder');
    loadFragment('categories.html',    'categories-placeholder');
    loadFragment('you-may-like.html',  'you-may-like-placeholder');
});

// Simple automatic slideshow
let slideIndex = 0;
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 5000); // change image every 5 seconds
}

// Start slideshow when page loads
document.addEventListener('DOMContentLoaded', () => {
    // ... your existing loadFragment calls ...
    
    showSlides(); // start the slideshow
});
