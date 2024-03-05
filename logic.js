document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slides');

    let slideWidth = slides.firstElementChild.clientWidth;
    let slideIndex = 0;

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.children.length) {
            slideIndex = 0;
        }
        updateSlider();
    }

    function prevSlide() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.children.length - 1;
        }
        updateSlider();
    }

    function updateSlider() {
        const offset = -slideIndex * slideWidth;
        slides.style.transform = `translateX(${offset}px)`;
    }

    setInterval(nextSlide, 3000); // Auto slide every 3 seconds
});
const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slideIndex = 0;
const totalSlides = slides.children.length;

// Calculate slide width for the transition
const slideWidth = slider.offsetWidth;

// Next Slide Function
function nextSlide() {
    slideIndex++;
    if (slideIndex >= totalSlides) { slideIndex = 0; }
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Previous Slide Function  
function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) { slideIndex = totalSlides - 1; }
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Button Event Listeners 
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);