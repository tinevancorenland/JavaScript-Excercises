/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var run = document.getElementById("run");
    run.addEventListener("click", numberInTable);

    var tableCells = document.getElementsByTagName("td");
    var numberArray = [];

    function numberInTable(){

        for(i=0; i<tableCells.length; i++) {
            var numbers = Math.floor(Math.random() * 100);
            numberArray.push(numbers);
            tableCells[i].innerHTML = numberArray[i];
        }
        smallestNumber();
        biggestNumber();
        sumNumber();
    }

    function smallestNumber() {
        var min = document.getElementById("min");
        min.innerHTML= Math.min(...numberArray);
    }

    function biggestNumber() {
        var max = document.getElementById("max");
        max.innerHTML = Math.max(...numberArray);
    }

    function sumNumber() {
        var sum = document.getElementById("sum");
        sum.innerHTML = numberArray.reduce(sumItUp);

        function sumItUp(total, number) {
            return total + number;
        }

        averageNumber();
    }

    function averageNumber() {
        var average = document.getElementById("average");
        average.innerHTML = Math.floor((sum.innerHTML) /numberArray.length) ;
    }


})();
