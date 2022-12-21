let notes = 0;
let notesum = 0;
let tick = -1;

do {
  notesum += Number(notes);
  tick++;
  notes = prompt("Please enter your grades");
} while (notes !== "q" && notes !== "Q");

console.log(`Addition of grades: ${notesum} average of your grades: ${notesum / tick}`);