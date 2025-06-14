/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;
// Print out the concatenated string
console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const camelTail = `${part1.slice(0, -1)}${part1
  .slice(-1)
  .toUpperCase()}${part2.slice(0, -1)}${part2.slice(-1).toUpperCase()}`;
// Print the cameLtaiL-formatted string
console.log(camelTail);
/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipPercentage = 0.15;
const tipAmount = billTotal * tipPercentage;
// Print out the tipAmount
console.log(`Tip Amount: $${tipAmount.toFixed(2)}`);
/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.floor(Math.random() * 10) + 1;
// Print the generated random number
console.log(`Random Number: ${randomNumber}`);
/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; 
// Expected output: false (because b is false, so the AND operation results in false)
// Actual output: false

const expression2 = a || b;
// Expected output: true (because a is true, so the OR operation results in true)
// Actual output: true

const expression3 = !a && b;
// Expected output: false (because !a is false, and b is false, so the AND operation results in false)
// Actual output: false

const expression4 = !(a && b);
// Expected output: true (because a && b is false, so the NOT operation results in true)
// Actual output: true

const expression5 = !a || !b;
// Expected output: false (because !a is false and !b is true, so the OR operation results in false)
// Actual output: false

const expression6 = !(a || b);
// Expected output: false (because a || b is true, so the NOT operation results in false)
// Actual output: false

const expression7 = a && a;
// Expected output: true (because both a's are true, so the AND operation results in true)
// Actual output: true
