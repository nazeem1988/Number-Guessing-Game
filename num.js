var secretNumber = 9;
var guess = Number(prompt("Guess a Number!"));
if (guess === secretNumber) {
    alert("You got it right");
}
else if (guess > secretNumber) {
    prompt("Too high, try again!");
}
else {
    alert("Too low, try again!");
}