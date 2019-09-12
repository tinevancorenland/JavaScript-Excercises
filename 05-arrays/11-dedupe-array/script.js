/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    var run = document.getElementById("run");
    run.addEventListener("click", removeDuplicates);

    function removeDuplicates() {
        var uniqueFruits = [...new Set(fruits)]; 
        console.log(uniqueFruits);
    }

    // set only allows unique values, and removes all duplicates
    // the spread operator ... converts it back to an array

})();
