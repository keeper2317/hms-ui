document.addEventListener('DOMContentLoaded', () => {
    const tooltipLabel = document.querySelector('.tooltip-label');
    const tooltipContent = document.querySelector('.tooltip-content');

    // Show tooltip on hover
    tooltipLabel.addEventListener('mouseenter', () => {
        const rect = tooltipLabel.getBoundingClientRect();
        tooltipContent.style.top = `${rect.bottom + window.scrollY + 5}px`; // Position below the label
        tooltipContent.style.left = `${rect.left + window.scrollX}px`;
        tooltipContent.classList.add('show'); // Add class to show
    });

    // Hide tooltip when mouse leaves the label
    tooltipLabel.addEventListener('mouseleave', () => {
        tooltipContent.classList.remove('show'); // Remove class to hide
    });

    // Show tooltip on click
    tooltipLabel.addEventListener('click', () => {
        const isVisible = tooltipContent.classList.contains('show');
        if (isVisible) {
            tooltipContent.classList.remove('show'); // Hide on click
        } else {
            tooltipContent.classList.add('show'); // Show on click
        }
    });

    // Hide tooltip when clicking outside
    document.addEventListener('click', (event) => {
        if (!tooltipLabel.contains(event.target) && !tooltipContent.contains(event.target)) {
            tooltipContent.classList.remove('show'); // Hide when clicking outside
        }
    });
});
