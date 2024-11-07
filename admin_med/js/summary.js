function toggleExtraText(id) {
    const summaryElement = document.getElementById(`summary-${id}`);
    const extraTextElement = document.getElementById(`extra-${id}`);
    const toggleLink = summaryElement.parentElement.querySelector('.toggle-link');

    if (extraTextElement.style.display === 'block') {
        extraTextElement.style.display = 'none';
        toggleLink.textContent = 'Show more';
    } else {
        extraTextElement.style.display = 'block';
        toggleLink.textContent = 'Show less';
    }
}