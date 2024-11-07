document.addEventListener('DOMContentLoaded', function () {
    // Render the initial bed grid with live data
    fetchBedData();

    // Add event listener to the refresh link
    document.getElementById('refresh-data').addEventListener('click', function (event) {
        event.preventDefault(); // Prevents the default anchor action
        fetchBedData(); // Call function to fetch and display latest bed data
    });
});

function fetchBedData() {
    fetch('/beds-with-assignments')
        .then(response => response.json())
        .then(data => renderBedGrid(data.beds))
        .catch(error => console.error('Error fetching bed data:', error));
}

// Function to render the bed status grid
function renderBedGrid(beds) {
    const bedGrid = document.getElementById('bed-grid');
    if (!bedGrid) return; // Exit if the bed grid doesn't exist yet

    bedGrid.innerHTML = ''; // Clear existing grid

    beds.forEach((bed, index) => {
        const roomDiv = document.createElement('div');
        const status = bed.status.toLowerCase(); // Normalize status to lowercase for consistency

        roomDiv.classList.add('room');
        roomDiv.classList.add(status === 'vacant' ? 'available' : 'occupied'); // Use 'available' for vacant, 'occupied' otherwise

        roomDiv.innerHTML = `
            <h3>Room ${bed.room_number}</h3>
            <p>Status: ${status === 'vacant' ? 'Available' : 'Occupied'}</p>
            ${bed.patient_name ? `<p>Patient: ${bed.patient_name}</p>` : ''}
        `;

        // Add a click event listener for each bed
        roomDiv.addEventListener('click', () => handleBedClick(index));

        bedGrid.appendChild(roomDiv);
    });
}


