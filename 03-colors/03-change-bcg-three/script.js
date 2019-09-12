/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var run = document.getElementById("run");
    run.addEventListener("click", randomBgColor);

    function randomBgColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + r + "," + g + "," + b + ")";
        console.log(bgColor);

        document.body.style.backgroundColor = bgColor;
    }
})();
