/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var run = document.getElementById("run");
    console.log(run);

    var passOne = document.getElementById("pass-one");
    var passTwo = document.getElementById("pass-two");
    console.log(passOne, passTwo);

    run.addEventListener("click", checkSamePass);

    function checkSamePass() {
        if(passOne.value !== passTwo.value) {
            passOne.style.borderColor = "red";
            passTwo.style.borderColor = "red";
        }
    }

})();
