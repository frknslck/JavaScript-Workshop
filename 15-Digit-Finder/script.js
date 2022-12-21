let num = +prompt("Enter the number: ");
let tick = 0;
do {
    num = Math.trunc(num /= 10)
    console.log(num);
    tick+=1
} while (num!=0);
    console.log(`Your number is ${tick} digits`);