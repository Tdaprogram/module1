function rollDice(sides) {
  console.log(sides);
  var dice = document.getElementById("dice");
  var sides = ["front", "back", "left", "right", "top", "bottom"];
  var randomIndex = Math.floor(Math.random() * sides.length);
  var randomSide = sides[randomIndex];
  
  // Rotate to a random side
  dice.style.transform = "rotateX(" + (Math.floor(Math.random() * 4) * 90) + "deg) rotateY(" + (Math.floor(Math.random() * 4) * 90) + "deg)";
  dice.classList.remove(...sides);
  dice.classList.add(randomSide);
}
