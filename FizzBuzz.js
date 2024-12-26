var output = [];
var currentNumber = 1;

function fizzBuzz() {
    if (currentNumber <= 100) {
        if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
            output.push("FizzBuzz");
        } else if (currentNumber % 3 === 0) {
            output.push("Fizz");
        } else if (currentNumber % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(currentNumber);
        }
        currentNumber++;
    } else {
        console.log("All numbers from 1 to 100 have been added.");
    }
    console.log(output);
}

// Example execution
fizzBuzz();

