// Global Variables
var imgPath = "/web/images/backgrounds/";   // Path to find images. Files served from /jellyfin/jellyfin-web/ = /web/
var imgExt = ".jpg";                        // File type to be found in imgPath. Example naming 1.png, 2.png or 1.jpg, 2.jpg
var imgCount = "20";                        // How many images found in imgPath
var reSeconds = "7.5";                      // Reload image every n seconds

// Preload Images

function preload() {
	// Call first random background image
	changeImg()
    
    const images = [];
    let loadedImagesCount = 0;
    const totalImages = 20;

    function allImagesLoaded() {
        // Start background image rotation after all images have been loaded
         setInterval(function() { changeImg() }, (reSeconds * 1000));
         changeImg()
    }

    function imageLoaded() {
        loadedImagesCount++;
        if (loadedImagesCount === totalImages) {
            allImagesLoaded();
        }
    }

    for (let i = 1; i <= totalImages; i++) {
        images[i] = new Image();
        images[i].src = `/web/images/backgrounds/${i}.jpg`;
        images[i].onload = imageLoaded;
        images[i].onerror = imageLoaded; // Call imageLoaded in case of load error to avoid blocking
    }
}

// Main Function for creating the custom css and inject it into the css file
var imgNum = imgCount-1;
function changeImg()	{
    var newImgNumber =Math.floor(Math.random()*imgNum);
    newImgNumber = newImgNumber +1;
    var sheet = window.document.styleSheets[0];
    sheet.insertRule('#loginPage {  background: url('+imgPath+''+newImgNumber+''+imgExt+') !important; \
                                    background-size: cover !important; \
                                    background-position: 50% 65% !important; \
                                    background-repeat: no-repeat !important; \
                                    transition: background-image 1s linear; \
                                    }', sheet.cssRules.length)
}

// Change the background on page load
window.onload=preload;
