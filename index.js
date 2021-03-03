var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = (Math.floor(randomNumber1) + 1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = (Math.floor(randomNumber2) + 1);


var randomDiceNumber1 = "images/dice" + randomNumber1 + ".png";
var randomDiceNumber2 = "images/dice" + randomNumber2 + ".png";

document.querySelector("img").setAttribute("src", randomDiceNumber1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceNumber2)

if(randomDiceNumber1 > randomDiceNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if(randomDiceNumber1 < randomDiceNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
