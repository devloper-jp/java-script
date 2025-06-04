let gamenumber = 25;
let guess_number = prompt("Guess the correct number");

while ( guess_number != gamenumber) {
    guess_number = prompt("Wrong guess! Try again:");
}

console.log("Congratulations! You guessed the correct number");
console.log ("The correct number is: ", gamenumber);

