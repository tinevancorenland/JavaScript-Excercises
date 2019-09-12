/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth();
    var todayDay = today.getDay();
    console.log(todayYear, todayMonth, todayDay);

    var run = document.getElementById("run");
    run.addEventListener("click", alertAge);

    function alertAge() {
        var birthYear = document.getElementById("dob-year").value;
        var birthMonth = document.getElementById("dob-month").value;
        var birthDay = document.getElementById("dob-day").value;    

        console.log(birthYear, birthMonth, birthDay)

        var ageYear = todayYear - birthYear;
        var ageMonth = todayMonth - birthMonth;
        var ageDay = todayDay - birthDay;
        console.log("you are " + ageYear + " years, " + ageMonth + " months and " + ageDay + " days old");

        if (todayMonth < birthMonth) {
            console.log(ageYear -1);
        } else if (todayMonth == birthMonth && todayDay > birthDay){
            console.log(ageYear - 1);
        } else {
            console.log(ageYear);
        }
    }
})();

