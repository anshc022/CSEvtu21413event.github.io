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

    // ... (rest of your button code) 
});

// ... (eventCards code)