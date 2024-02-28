// Script to handle registration button click events
const registerButtons = document.querySelectorAll('.register-btn');

registerButtons.forEach(button => {
    button.addEventListener('click', function() {
        const eventId = button.dataset.eventId;

        // 1. Loading Indicator
        button.disabled = true;
        button.textContent = ''; // Clear the text

        // Create a loading spinner element 
        const loader = document.createElement('div');
        loader.classList.add('loader'); // Add a CSS class for styling
        button.appendChild(loader);

        // 2. Redirect with Transition 
        window.setTimeout(() => {
            window.location.href = `ev1.html?eventId=${eventId}`;
        }, 500);

        // 3. Re-enable Button (Optional)
        // ... (You might do this after fetching data on ev1.html)
        //     button.disabled = false; 
        //     button.textContent = 'Register Now'; 
        //     button.removeChild(loader);
    });
});

// Script to handle event date display and registration button
const eventDateElement = document.getElementById('event-date');
const today = new Date();
const eventDate = new Date('February 29, 2024'); // Update with the actual event date

// Check if the event is in the past 
if (eventDate < today) {
    eventDateElement.textContent = "This event has already happened!";
    eventDateElement.style.color = "red"; // Indicate past event
    // Optionally disable the registration button:
    document.getElementById('register-button').disabled = true;
}

// Script to handle smooth scrolling to sections
const sectionLinks = document.querySelectorAll('#event-about, #event-info, #event-rules');

sectionLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default jump behavior

        const sectionId = this.getAttribute('id');
        const targetSection = document.getElementById(sectionId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Script to handle countdown timer
const countdownElement = document.createElement('div'); // Create a new element for the timer
countdownElement.id = 'countdown';
document.querySelector('.container').appendChild(countdownElement); // Insert to the page

const targetDate = new Date('February 29, 2024 13:30:00').getTime(); // Set event time

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.textContent = `Event starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Check if event passed
    if (timeLeft < 0) {
        clearInterval(countdownInterval); // Stop the timer
        countdownElement.textContent = 'Event Started!';
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call