do{
    const randomnum = Math.trunc(Math.random() * 100)
    console.log(randomnum)
    let turn = 1;
    let guess = ""
    guess = +prompt("Enter your guess: ");
    do {
        if (guess == randomnum){
            alert("Congrats! You guessed right! It took " + turn + " turns.");
            break;
        } else if (turn==5) {
            alert("What a shame... Maybe next time!");
            break;
        }else if (guess > randomnum){
            turn += 1;
            guess = +prompt("Wrong! Try Lower.");
        }else{
            turn += 1;
            guess = +prompt("Wrong! Try Higher.");
        }
    } while (turn != 6);
    again = confirm("Wanna try again?");
}while(again===true);