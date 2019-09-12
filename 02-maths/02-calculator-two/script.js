/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var button = document.getElementsByTagName("button");

    for (i=0; i < button.length; i++) {
        button[i].addEventListener("click", Click);
        function Click() {
            console.log(this.id);

            switch(button) {
                case(addition):
                    console.log("addition");
                    break;

                case(substraction):
                    console.log("subtraction");
                    break;

                case(multiplication):
                    console.log("multiplication");
                    break;
                
                case(division):
                    console.log("division");
            }
    }
}

})();
