// Begin Function
function luckySevens() {
  var initialAmount = 25; // <--- I couldn't properly figure out how to use:
                          // getElementsByClassName('className') but if you run this in a terminal the function works.
  var amountHistory = [initialAmount];
  var rollCount = 0;

  //Begin loop with alert if they don't input < 0 amount
  if (initialAmount <= 0) {
    alert("Error: Starting bet needs to be greater than 0");
  }

  else {
    while (amountHistory[amountHistory.length - 1] > 0) {
      var die1 = Math.floor(Math.random() * 6) + 1;
      var die2 = Math.floor(Math.random() * 6) + 1;
      var dice = die1 + die2;

      rollCount++;

      if (dice == 7) {
        var currentAmount = amountHistory[amountHistory.length - 1];
        amountHistory.push(currentAmount + 4);
      }
      else {
        var currentAmount = amountHistory[amountHistory.length - 1];
        amountHistory.push(currentAmount + -1);
      }
    }
  }
  maxAmount = Math.max(...amountHistory);
  maxRollCount = amountHistory.indexOf(maxAmount) + 2;

  //Output
  document.getElementById("initialBet").innerText = initialAmount;
  document.getElementById("rollsBroke").innerText = rollCount;
  document.getElementById("maxMoney").innerText = maxAmount;
  document.getElementById("rollsAtMax").innerText = maxRollCount;
  document.getElementById("Play").innerText = "Play Again!";
  document.getElementById("results").style.display = "block";

}
