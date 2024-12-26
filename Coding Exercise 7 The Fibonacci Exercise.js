function fibonacciGenerator(n) {
    var fibonacciArray = [0, 1];

    for (var i = 2; i < n; i++) {
        var nextNumber = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        fibonacciArray.push(nextNumber);
    }

    if (n === 1) {
        return [0];
    }

    return fibonacciArray.slice(0, n);
}

var fibonacciSequence = fibonacciGenerator(10);
console.log(fibonacciSequence); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
