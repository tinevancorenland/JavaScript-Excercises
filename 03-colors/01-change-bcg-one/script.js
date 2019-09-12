/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var red = document.getElementById("red");
    red.addEventListener("click", redBackground);

    function redBackground() {
        document.body.style.backgroundColor = "red";
    }

    var green = document.getElementById("green");
    green.addEventListener("click", greenBackground);

    function greenBackground() {
        document.body.style.backgroundColor = "green";
    }

    var yellow = document.getElementById("yellow");
    yellow.addEventListener("click", yellowBackground);

    function yellowBackground() {
        document.body.style.backgroundColor = "yellow";
    }

    var blue = document.getElementById("blue");
    blue.addEventListener("click", blueBackground);

    function blueBackground() {
        document.body.style.backgroundColor = "blue";
    }

})();
