let guestlist = ["Alice", "Bob", "Charlie", "Diana", "Edward", "Fiona"];

function checkGuestList() {
    let name = prompt("Enter your name:").trim();
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    
    if (guestlist.includes(name)) {
        alert(`Welcome, ${name}! You are on the guest list.`);
    } else {
        alert(`Sorry, ${name}. You are not on the guest list.`);
    }
}

checkGuestList();
