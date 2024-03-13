# jellyfin-login-artbackground
A simple yet effective way to add a refreshing background on the jellyfin login page it now auto reloads the background image after a configurable amount of time Based on BobHasNoSouls https://github.com/BobHasNoSoul/jellyfin-fanartbackground
#### Differences to BobHasNoSouls version
1) Rewrote the README with instructions for use with docker compose installs of Jellyfin.
2) Made it so you self serve the script via Jellyfins web server.
3) Made away with the use of an array to hold all the file names, now you just tell it how many pictures and the extension type.
4) Made it so that file names are possible, not just numbered images.
5) Made the time easily adjustable.
6) Ensured the images expands from the center rather than the top left corner
7) Oh and I renamed it jellyfin-login-artbackground because I use it to serve AI generated sci-fi art not fanart.

# Installation
### Docker compose install

* Take down Jellyfin ` docker compose down `
* Add the follwing volumes to your compose file. These allow edting of the index.html file and to serve the required files.
```
    volumes:
      - ./config/images:/jellyfin/jellyfin-web/images
      - ./config/index.html:/jellyfin/jellyfin-web/index.html
```
* Bring Jellyfin back up ` docker compose up -d ` We should now have an index.html file in our config folder.
* Create an images folder in your config directory to match the local volumes above. ` mkdir ./config/images `
* Download the cssbuster.js script from the repo and place it in the images folder created above. ./config/images/cssbuster.js
* Create a backgrounds folder in the above images folder ` mkdir ./config/images/backgrounds `
* Add the following to the end of your index.html file using `sudo nano ./config/index.html` (and insert it just before the final </body> tag
```
    <script src="images/cssbuster.js"></script>
```
### Settings and images
* Fill the backgrounds folder with images with a consistent numbering system ` 1.jpg, 2,jpg, 3,jpg,,,,,, `
* To use named files you need to adjust the imgPath or imgExt variables in the script to match your naming.
*  eg for `Background_1.jpg, Background_2.jpg, Background_3.jpg,,,,,` use
```
imgPath = "/web/images/backgrounds/Background_";
```
*  eg for ` 1_background.png, 2_background.png, 3_background.png,,,,, ` use `
```
imgExt = "_background.png"; `
```
*  You can also use a combination if your numbering is in the middle of the name.
*  The numbering has NO padding and should start at 1.
* Set the number of images file count variable in the script to match how many you have in your folder. ` imgCount = "30"; `
* Set the image display time variable in the script file. ` reSeconds = "7.5"; `

Then simply refresh the page if you still have issues clear your cache or restart Jellyfin one more time

### Global Variables
```
imgPath = "/web/images/backgrounds/";   // Path to find images. Files served from /jellyfin/jellyfin-web/ = /web/
imgExt = ".jpg";                        // File type to be found in imgPath. Example naming 1.png, 2.png or 1.jpg, 2.jpg
imgCount = "30";                        // How many images found in imgPath
reSeconds = "7.5";                      // Reload image every n seconds
```

# known issues 
Not all images work well on mobile phones (some vertical displays)
