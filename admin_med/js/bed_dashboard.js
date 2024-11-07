document.addEventListener('DOMContentLoaded', function() {
    // Render the initial bed grid
    renderBedGrid();

    // Add event listener to the update button
    document.getElementById('update-status').addEventListener('click', updateBedStatuses);
});

// Initial bed data (this could be replaced with an API call later)
const beds = [
    { room_number: '101', status: 'available', patient_name: '' },
    { room_number: '102', status: 'occupied', patient_name: 'John Doe' },
    { room_number: '103', status: 'available', patient_name: '' },
    { room_number: '104', status: 'occupied', patient_name: 'Jane Smith' },
    { room_number: '105', status: 'available', patient_name: '' },
    { room_number: '106', status: 'occupied', patient_name: 'Mary Johnson' },
    { room_number: '107', status: 'available', patient_name: '' },
    { room_number: '108', status: 'occupied', patient_name: 'Michael Brown' },
];

// Function to render the bed status grid
function renderBedGrid() {
    const bedGrid = document.getElementById('bed-grid');
    if (!bedGrid) return; // Exit if the bed grid doesn't exist yet

    bedGrid.innerHTML = ''; // Clear existing grid

    beds.forEach((bed, index) => {
        const roomDiv = document.createElement('div');
        roomDiv.classList.add('room');
        roomDiv.classList.add(bed.status === 'available' ? 'available' : 'occupied');
        roomDiv.innerHTML = `
            <h3>Room ${bed.room_number}</h3>
            <p>Status: ${bed.status === 'available' ? 'Available' : 'Occupied'}</p>
            ${bed.patient_name ? `<p>Patient: ${bed.patient_name}</p>` : ''}
        `;
        
        // Add a click event listener for each bed
        roomDiv.addEventListener('click', () => handleBedClick(index));
        
        bedGrid.appendChild(roomDiv);
    });
}

