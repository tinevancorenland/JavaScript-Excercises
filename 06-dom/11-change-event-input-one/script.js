/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var input = document.getElementById("pass-one");

    var counter = document.getElementById("counter");
    console.log(counter);

    input.addEventListener("keypress", function() {
        var inputLength = (input.value.length) +1;

        if(inputLength < 11) {
            counter.innerHTML = inputLength + "/10";
        } else {
            alert("you have reached the limit of 10 charakters");
        }
    })




})();
