// Function to set the current date for all date inputs with the class 'date-input'
function setCurrentDate() {
    const dateInputs = document.querySelectorAll('.date-input');
    const now = new Date();
    const formattedDate = now.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    
    dateInputs.forEach(dateInput => {
        dateInput.value = formattedDate; // Set the formatted date
    });
}

// Function to set the current time for all time inputs with the class 'time-input'
function setCurrentTime() {
    const timeInputs = document.querySelectorAll('.time-input');
    const now = new Date();
    const formattedTime = now.toTimeString().split(' ')[0].substring(0, 5); // Format: HH:MM
    
    timeInputs.forEach(timeInput => {
        timeInput.value = formattedTime; // Set the formatted time
    });
}
