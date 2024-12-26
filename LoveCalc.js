var n = Math.floor(Math.random() * 100) + 1; // Simplify into one line
console.log(n); // Log for debugging

var name1 = prompt("What is your name?");
var name2 = prompt("What is their name?");

if (name1 === null || name2 === null || name1 === "" || name2 === "") {
    console.log("Please enter valid names.");
} else {
    function loveCalc(name1, name2) {
        // Use actual names or length, here we're using length for simplicity
        var compatibility = Math.abs(name1.length - name2.length) * n;
        
        // Ensure compatibility is within a sensible range, say 0-100
        compatibility = Math.min(Math.max(compatibility, 0), 100);
        
        return compatibility;
    }

    var result = loveCalc(name1, name2);
    console.log(`The love compatibility score is: ${result}%`);
}