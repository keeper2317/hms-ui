function addTextField(event, textareaId) {
    event.preventDefault(); // Prevent form submission

    const textarea = document.getElementById(textareaId); // Get the corresponding textarea
    textarea.style.display = 'block'; // Show the textarea

    // Hide the button after adding the textarea
    const button = event.target; // Get the button that was clicked
    button.style.display = 'none'; // Hide the button
}
