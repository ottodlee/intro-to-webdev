function resetForm() {
    clearErrors();
    document.forms["input"]["startingBet"].value = "";
    document.getElementById("results").style.display = "none";
    document.forms["input"]["startingBet"].focus();
}

function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["input"].elements.length;
        loopCounter++) {
        if (document.forms["input"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["input"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}

function validateItems() {
    clearErrors();
    var startBet = document.forms["input"]["startingBet"].value;

    if (Number(startBet) < 1) {
        alert("Starting Bet must be greater than zero.");
        document.forms["input"]["startingBet"]
           .parentElement.className = "form-group has-error";
        document.forms["input"]["startingBet"].focus();
        return false;
    }

    var totalRolls=0;
    var highestWon=Number(startBet);
    var highestWonRollCount=0;
    var gameMoney=Number(startBet);

    // Play Game
      do {
        totalRolls+=1;
        // Roll Dice
        var diceTotal = rollDice(6) + rollDice(6);

        // Winner winner chicken dinner!!
        if (diceTotal == 7) {
          gameMoney+=4;
            // Check for highest Amount
            if (gameMoney > highestWon) {
              highestWon=gameMoney;
              // Increment roll count at highest amount Won
              highestWonRollCount = totalRolls;
            }
        // Lose the roll
        } else {
          gameMoney-=1;
        }
      } while (gameMoney > 0);

   document.getElementById("results").style.display = "block";
   document.getElementById("results-startingBet").innerText="$"+startBet+".00";
   document.getElementById("results-totalRolls").innerText=totalRolls;
   document.getElementById("results-highestWon").innerText="$"+highestWon+".00";
   document.getElementById("results-highestWonRollCount").innerText=highestWonRollCount;

   // We are returning false so that the form doesn't submit
   // and so that we can see the results
   return false;
   }
