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

    var imageStart = document.getElementsByTagName("img");
    var imageOnHoverSource = imageStart[0].dataset.hover;
    var imageStartSource = imageStart[0].src;

    console.log(imageStart);
    console.log(imageOnHoverSource);
    console.log(imageStartSource);
    
    function changeImage() {
        imageStart[0].src = imageStart[0].dataset.hover;
        console.log(imageStartSource)
    }

    changeImage()



    


})();
