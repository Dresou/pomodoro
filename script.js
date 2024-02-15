// Select all images in the dropdown
const images = document.querySelectorAll('.dropdown-content img');

// Function to change background image
function changeBackground(imageUrl) {
    document.body.style.backgroundImage = "url('" + imageUrl + "')";
}

// Add click event listener to each image
images.forEach(image => {
    image.addEventListener('click', function() {
        // Get the URL of the clicked image
        const imageUrl = this.getAttribute('src');
        // Change the background image of the body
        changeBackground(imageUrl);
    });
});
