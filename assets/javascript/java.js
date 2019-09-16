var guess = {
    form : null,
    field : 0,
    
    button : null,
    txt : null,
    wins : 0,
    guesses : 0,



   check: function (evt) {

   var num = parseInt(guess.field.value);
   guess.guesses++;
   guess.txt.classList.remove("high");
   guess.txt.classList.remove("low");
   guess.field.value = "reset";

        if (num == guess.win) {
            guess.txt.innerHTML = "Nailed it! Total guesses made - " + guess.guesses;
            guess.txt.classList.add("hit");
            guess.field.readOnly = true;
            guess.button.value = "Reset";
            guess.form.removeEventListener("submit", guess.check);
            guess.form.addEventListener("submit", guess.reset);
        } else {
            var difference = num - guess.win,
                text = "";


            if (difference > 0) {
                text = "high";
                guess.txt.classList.add("high");
            } else {
                text = "low";
                guess.txt.classList.add("low");
            }


            


            guess.txt.innerHTML = text;
        }


        evt.preventDefault();
        evt.stopPropagation();
        return false;
    },


    reset: function (evt) {
        guess.guesses = 0;
        guess.txt.innerHTML = "";
        guess.txt.classList.remove("hit");
        guess.field.readOnly = false;
        guess.field.value = 0;
        guess.button.value = "Make a Guess";
        guess.form.removeEventListener("submit", guess.reset);
        guess.form.addEventListener("submit", guess.check);


        guess.win = Math.floor(Math.random() * (100)) + 1;


        

        evt.preventDefault();
        evt.stopPropagation();
        return false;
    }
};


window.addEventListener("load", function () {

    guess.form = document.getElementById("guess-form");
    guess.field = document.getElementById("guess-num");
    
    guess.button = document.getElementById("guess-btn");
    guess.txt = document.getElementById("guess-txt");


    guess.form.addEventListener("submit", guess.check);


    guess.win = Math.floor(Math.random() * (100)) + 1;


    
});