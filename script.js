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
function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var files = event.dataTransfer.files;
    if (files.length > 0) {
        var file = files[0];
        if (file.type.match('image.*')) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.body.style.backgroundImage = 'url(' + e.target.result + ')';
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please drop an image file.");
        }
    }
}
