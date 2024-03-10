
// Global Variables
var imgPath = "/web/images/backgrounds/";   // Path to find images. Files served from /jellyfin/jellyfin-web/ = /web/
var imgExt = ".jpg";                        // File type to be found in imgPath. Example naming 1.png, 2.png or 1.jpg, 2.jpg
var imgCount = "20";                        // How many images found in imgPath
var reSeconds = "7.5";                      // Reload image every n seconds

// Main Function for creating the custom css and inject it into the css file
var imgNum = imgCount-1;
function changeImg()	{
    var newImgNumber =Math.floor(Math.random()*imgNum);
    newImgNumber = newImgNumber +1;
    var sheet = window.document.styleSheets[0];
    sheet.insertRule('#loginPage {  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('+imgPath+''+newImgNumber+''+imgExt+') !important; \
                                    background-size: cover !important; \
                                    background-position: 50% 65% !important; \
                                    background-repeat: no-repeat !important; \
                                    }', sheet.cssRules.length)
}

// Change the background on page load
window.onload=changeImg;

// Change the background at regular intervals
setInterval(function() { changeImg() }, (reSeconds * 1000));
