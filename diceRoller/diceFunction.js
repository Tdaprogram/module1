<<<<<<< HEAD

//Change logic from 6 sides to 8 sides selection ?
function rollDice(sides) {
  console.log(sides);
  var dice = document.getElementById("dice");
  var sides = ["front", "back", "left", "right", "top", "bottom"];
  var randomIndex = Math.floor(Math.random() * sides.length);
  var randomSide = sides[randomIndex];
  
  // Rotation side finding and angle setup
  dice.style.transform = "rotateX(" + (Math.floor(Math.random() * 4) * 90) + "deg) rotateY(" + (Math.floor(Math.random() * 4) * 90) + "deg)";
  dice.classList.remove(...sides);
  dice.classList.add(randomSide);
=======
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
>>>>>>> b11cee14fa372e1459ada798bcc4c5aee34f57ba
}
