/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var opOne = document.getElementById("op-one");
var opTwo = document.getElementById("op-two");

(function() {

    document.getElementById("addition").addEventListener("click", function() {

        var A = parseInt(opOne.value);
        var B = parseInt(opTwo.value);
        console.log(A, B);
        var add = A + B;
        alert("the addition of these two numbers is " + add);
    });

    document.getElementById("substraction").addEventListener("click", function() {

        var A = parseInt(opOne.value);
        var B = parseInt(opTwo.value);
        console.log(A, B);
        var sub = A - B;
        alert("the subtraction of these two numbers is " + sub);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        
        var A = parseInt(opOne.value);
        var B = parseInt(opTwo.value);
        console.log(A, B);
        var mult = A * B;
        alert("the multiplication of these two numbers is " + mult);
    });

    document.getElementById("division").addEventListener("click", function() {
        
        var A = parseInt(opOne.value);
        var B = parseInt(opTwo.value);
        console.log(A, B);
        var divi = A / B;
        alert("the division of these two numbers is " + divi);
    });
})();
