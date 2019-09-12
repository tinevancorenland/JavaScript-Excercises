/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var target = document.getElementById("target");
    var today = new Date();

    var todayDayNr = today.getDate();
    var weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var todayWeekday = weekday[today.getDay()];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var todayMonth = months[today.getMonth()];
    var todayYear = today.getFullYear();
    var todayHours = today.getHours();
    var todayMinutes = today.getMinutes();

    target.innerHTML = todayWeekday + " " + todayDayNr + " " + todayMonth + " " + todayYear + ", " + todayHours + "h" + todayMinutes;

})();
