// Function declaration for display_random_image
function display_random_image() {
    // Array containing image objects with src, width, height, and link properties
    var theImages = [{
        src: "img/bug1.jpg",
        width: "1080",
        height: "720",
        link: "https://www.parks.ca.gov/?page_id=23795"
    }, {
        src: "img/bug2.jpg",
        width: "1080",
        height: "720",
        link: "https://ucanr.edu/blogs/blogcore/postdetail.cfm?postnum=56080"
    }, {
        src: "img/bug3.jpg",
        width: "1080",
        height: "720",
        link: "https://www.insectidentification.org/insect-description.php?identification=Red-Shouldered-Bug"
    }, {
        src: "img/bug4.jpg",
        width: "1080",
        height: "720",
        link: "https://www.nps.gov/articles/000/common-green-darner.htm"
    }, {
        src: "img/bug5.jpg",
        width: "1080",
        height: "720",
        link: "https://www.sanluisobispo.com/news/nation-world/national/article234888382.html"
    }, {
        src: "img/bug6.jpg",
        width: "1080",
        height: "720",
        link: "https://ucanr.edu/blogs/blogcore/postdetail.cfm?postnum=21759"
    }];

    // Array to hold pre-buffered images
    var preBuffer = [];
    // Loop to preload images
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }

    // Function to generate random integer between min and max values
    function getRandomInt(min, max) {
        // Generating random integer between min and max
        const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        // Return the random item from the preBuffer array
        return preBuffer[randomIndex];
    }

    // Get a random image object from the preBuffer array
    var randomImageObject = getRandomInt(0, preBuffer.length - 1);
    var newImage = randomImageObject;
    var imageLink = theImages[preBuffer.indexOf(newImage)].link; // Get the link for the selected image

    // Get the reference to the image container div
    var imageContainer = document.getElementById('image-container');

    // Removing any previous images
    var images = imageContainer.getElementsByTagName('a');
    while (images.length > 0) {
        imageContainer.removeChild(images[0]);
    }

    // Creating a new link element
    var link = document.createElement('a');
    link.id = "inline";
    link.href = imageLink; // Use the link property from the selected image object
    link.target = '_blank'; // Open the link in a new tab/window

    // Appending the image to the link
    link.appendChild(newImage);

    // Displaying the new image link
    imageContainer.appendChild(link);
}