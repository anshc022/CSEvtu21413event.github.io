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
