let no = +prompt("Please enter a number between 0-100");

while (no < 0 || no > 100) {
    no = +prompt("Your number is not valid, please enter a number between 0-100");
}alert("Your number is valid, thank you!");
