//password retry program
// first run this in terminal: "npm install prompt-sync"
// because prompt-sync is an external package that adds a simple prompt function
// for reading user input from the terminal in Node.js.
// Node.js does not provide a built-in prompt function like browsers do,
// so we require prompt-sync and assign it to prompt before using it.
const prompt = require("prompt-sync")();
let attempt= 0;
let password = "abc123";
while(attempt<3){
    let userinput = prompt("Enter your password");
    if(userinput === password){
        console.log("Login successful");
        break;
    }
    attempt++;
}
if(attempt >= 3){
    console.log("Too many failed attempts. Please try again later.");
}