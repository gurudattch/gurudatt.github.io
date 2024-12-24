// test.js

// URL of the image from a different domain
const imageUrl = 'https://img.freepik.com/premium-photo/hacker-hacking-device-with-hoddy_707339-5564.jpg?w=2000'; // Replace with your image URL

// Function to set the background image
function setBackground() {
    document.body.style.backgroundImage = `url('${imageUrl}')`;
    document.body.style.backgroundSize = 'cover'; // Cover the entire body
    document.body.style.backgroundPosition = 'center'; // Center the background image
}

// Call the function to set the background
setBackground();
