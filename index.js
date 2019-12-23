var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);
console.log(randomNumber1);
console.log(randomNumber2);
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🎈! Player 1 Wins !";

} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerText = "! Player 2 Wins !🎈";

} else {
  document.querySelector("h1").innerText = "! DRAW !";
}
