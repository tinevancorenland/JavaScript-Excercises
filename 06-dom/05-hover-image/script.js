/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var image = document.getElementsByTagName("img");
    var imageOnHover = image[0].dataset.hover;
    var imageSource = image[0].src;

    console.log(image);
    console.log(imageOnHover);
    console.log(imageSource);

    function changeImage() {
        image[0].src = image[0].dataset.hover;
        console.log(imageSource)
    }

    changeImage()
    

})();
