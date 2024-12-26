function whosPaying(names) {
    var randomIndex = Math.floor(Math.random() * names.length);
    var payer = names[randomIndex];
    return payer + " is going to buy lunch today!";
}

// Example usage
var guestlist = ["Alice", "Bob", "Charlie", "Diana", "Edward", "Fiona"];
var result = whosPaying(guestlist);
console.log(result);
