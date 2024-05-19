function rollDice() {
  var numDice = parseInt(document.getElementById('numDice').value);
  var numSides = parseInt(document.getElementById('numSides').value);
  var modifier = parseInt(document.getElementById('modifier').value);

  var total = 0;
  for (var i = 0; i < numDice; i++) {
      total += Math.floor(Math.random() * numSides) + 1;
  }

  total += modifier;

  document.getElementById('diceResult').textContent = 'Result: ' + total;
}
