// Begin Function
function luckySevens() {
  var initialAmount = document.forms["luckySevens"]["bet"].value);
  var amountHistory = [initialAmount]
  var rollCount = 0;

  //Begin loop with alert if they don't input < 0 amount
  if (initialAmount <= 0) {
    alert("Error: Starting bet needs to be greater than $0");
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
        amountHistory.push(currentAmount+ + -1);
      }
    }

    maxAmount = Math.max(...amountHistory);
    maxRollCount = amountHistory.indexOf(maxAmount) + 2;

    //Output with included console logs if needed to test without accompanying HTML
    console.log("Starting Bet: " + initialAmount);
    document.getElementById("initialBet").innerText = initialAmount;

    console.log("Rolls Before Money Ran Out: " + rollCount);
    document.getElementById("rollsBroke").innerText = rollCount;

    console.log("Max Amount Held: " + maxAmount);
    document.getElementById("maxMoney").innerText = maxAmount;

    console.log("Rolls Taken When Max Money Was Held: " + maxRollCount);
    document.getElementById("rollsAtMax").innerText = maxRollCount;

    document.getElementById("Play").innerText = "Play Again!";
  }
}
