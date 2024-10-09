// DOM-based XSS vulnerability on the feedback page
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const returnPath = params.get('returnPath');
    const backLink = document.getElementById('backLink');
    
    if (returnPath) {
        // Vulnerable code
        backLink.setAttribute('href', returnPath);
        
        // Check if the returnPath is the XSS payload that triggers the alert
        if (returnPath === 'javascript:alert(document.cookie)') {
            // Show an alert box with the flag when the user solves the lab
            alert('Lab Solved! Flag: FLAG{YUBI_£34527}');
        }
    }
};
// Function to check the submitted flag
function checkFlag(event) {
    event.preventDefault(); // Prevent form submission
    const flagInput = document.getElementById("flagInput").value;
    const correctFlag = "FLAG{YUBI_£34527}"; 

    const congratsMessage = document.getElementById("congratsMessage");
    
    if (flagInput === correctFlag) {
        congratsMessage.classList.remove("hidden");
        alert("Congratulations! You've solved the lab!");
    } else {
        alert("Incorrect flag! Try again.");
    }
}

// Function to display the alert for solving the lab on the feedback page
function showAlert() {
    alert("Congratulations! You have successfully solved the lab! The flag is displayed in the navigation bar.");
}

// Add event listener for the feedback form submission
document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById("feedbackForm");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", showAlert);
    }
});
