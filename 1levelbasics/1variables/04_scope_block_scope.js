//if  checks condition and executes the block of code if the condition is true. In this case, the condition is always true, because of "true is keyword",so the block of code will always execute.
if (true) {

    var k = 1;

    let i = 2;

    const t = 3;
    
    console.log("var value 'printing works every where':  " + k); // works
    console.log("let value 'printing from inside the block':  " + i); // works
    console.log("const value 'printing from inside the block':  " + t); // works
}

console.log("var value 'printing from '**outside**' the block':" + k); // works

console.log("let value 'printing from outside the block':" + i); // error

console.log("const value 'printing from outside the block':" + t); // error
