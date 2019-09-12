/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var gender = prompt("What is your gender?");
var age = prompt("What is your age?");
var town = prompt("In which town do you live?");

var confirmation = confirm("Your age is " + age + ", your gender is " + gender + " and you live in " + town + ". Press OK to confirm, press CANCEL to resubmit");

(function() {
    promptInformation();
    console.log(gender, age, town);
})();

function promptInformation() {
    gender, age, town;
    confirmInformation();
}

function confirmInformation() {
    confirmation;
    alertOrRerun();
}

function alertOrRerun() {
    if (confirmation == true) {
        alert("damn u old");
    } else {
        alert("you pressed cancel");
        promptInformation();
    };
}




