// types variables declaration
var y; // This will not throw an error because 'var' variables "can" be declared without initialization.


let x; // This will not throw an error because 'let' variables "can" be declared without initialization.


const z = 30; // This will throw an error because 'const' variables must be initialized at the time of declaration. and const "cannot" be declared without initialization.


// "***assignment***"
var y = 100; //var variables "****can be reassigned and redeclared.****"

x = 50; //let variables "****can be reassigned but not redeclared.****"

// "**const z = 40;**"" // This will throw an error because 'const' variables cannot be reassigned."****const z= 30 must me initialized at the time of declaration.and once initialized, cannot be changed.****"


console.log(y, x, z);
