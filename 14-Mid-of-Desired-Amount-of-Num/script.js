let amount = +prompt("How many numbers do you want to calculate?")
let sum = 0;

for (let i = 1; i <= amount; i++) {
    let num = +prompt("Enter a number: ")
    sum += num;
    console.log(sum);
}

console.log(`Average of your numbers: ${sum / amount}`);

