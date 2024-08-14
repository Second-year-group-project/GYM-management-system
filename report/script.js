document.getElementById('addRowButton').addEventListener('click', function() {
    // Get the table body
    var tableBody = document.querySelector('#trainingTable tbody');
    
    // Create a new row
    var newRow = document.createElement('tr');
    
    // Create new cells with input fields
    newRow.innerHTML = `
        <td><input type="text" name="exercise" placeholder="Enter Exercise"></td>
        <td><input type="number" name="reps" placeholder="Reps"></td>
        <td><input type="number" name="sets" placeholder="Sets"></td>
        <td><input type="date" name="date"></td>
        <td><input type="text" name="rest" placeholder="Rest"></td>
        <td><input type="number" name="weight" placeholder="Weight (kg)"></td>
    `;
    
    // Append the new row to the table body
    tableBody.appendChild(newRow);
});

// Handle form submission
document.getElementById('userReportForm').addEvent
