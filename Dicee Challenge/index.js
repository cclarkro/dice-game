// Generate 2 Random Numbers
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber2);

// Generate Dice 1 to 6
var randomDiceImage1 = "/images/dice" + randomNumber1 + ".png" 
console.log(randomDiceImage1);
var randomDiceImage2 = "/images/dice" + randomNumber2 + ".png" 
console.log(randomDiceImage2);


// Assign those picks to images
document.querySelector(".img1").setAttribute('src',randomDiceImage1);
document.querySelector(".img2").setAttribute('src',randomDiceImage2);


// Determine Winner

if (randomNumber1 > randomNumber2) {
    // Player 1 Wins
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    // Player 2 Wins
    document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
    // Draw
    document.querySelector("h1").textContent = "It's a Draw!";
}