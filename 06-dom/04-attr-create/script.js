/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var sourceImage = document.getElementById("source").dataset.image;
    console.log(sourceImage);

    var target = document.getElementById("target");

    var image = document.createElement("img");
    image.setAttribute("src", sourceImage);
    target.appendChild(image);

    console.log(target);

    var source = document.getElementById("source");
    source.remove();

})();
