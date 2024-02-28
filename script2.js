// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add smooth transition for button hover effect
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#0056b3';
    });
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#007bff';
    });
});