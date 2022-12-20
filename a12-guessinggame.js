// do{
//     const randomnum = Math.floor(Math.random() * 100)
//     let turn = 1;
//     let guess = ""
//     guess = +prompt("Enter your guess: ");
//     do {
//         if (guess == randomnum){
//             alert("Congrats! You guessed right! It took " + turn + " turns.");
//             break;
//         }else if (guess > randomnum){
//             turn += 1;
//             guess = +prompt("Wrong! Try Lower.");
//         }else{
//             if(turn < 5){
//                 turn += 1;
//                 guess = +prompt("Wrong! Try Higher.");
//             }else{
//                 alert("What a shame... Maybe next time!");
//                 break;
//             }
//         }
//     } while (turn != 6);
//     again = confirm("Wanna try again?");
// }while(again===true);