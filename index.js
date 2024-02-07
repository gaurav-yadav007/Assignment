document.addEventListener("DOMContentLoaded", function() {
    var topLineLogos = [
        "./images/puma.jpeg",
        "./images/slack.jpeg",
        "./images/spacex.jpeg",
        "./images/spotify.jpeg","./images/microsoft.jpeg",
        "./images/walmart.jpeg",
        "./images/airbnb.jpeg"
        // Add more logo image paths as needed
    ];

    var bottomLineLogos = [
        "./images/puma.jpeg",
        "./images/slack.jpeg",
        "./images/spacex.jpeg",
        "./images/spotify.jpeg","./images/microsoft.jpeg",
        "./images/walmart.jpeg","./images/airbnb.jpeg"
        // Add more logo image paths as needed
    ];

    var topLineContainer = document.querySelector('.top-line');
    var bottomLineContainer = document.querySelector('.bottom-line');

    function addTopLineLogos() {
        topLineLogos.forEach(function(logoPath) {
            var img = document.createElement('img');
            img.src = logoPath;
            img.alt = "Company Logo";
            topLineContainer.appendChild(img);
        });
    }

    function addBottomLineLogos() {
        bottomLineLogos.forEach(function(logoPath) {
            var img = document.createElement('img');
            img.src = logoPath;
            img.alt = "Company Logo";
            bottomLineContainer.appendChild(img);
        });
    }

    addTopLineLogos();
    addBottomLineLogos();
});
