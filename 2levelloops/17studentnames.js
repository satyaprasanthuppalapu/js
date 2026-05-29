//studentnames print the names of students in a class
let students = ["Alice", "Bob", "Charlie", "David", "Eve"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
// Alternatively, using a for...of loop
for (let student of students) {
    console.log(student);
}
console.log("");
console.log("");
console.log("-----");
console.log("");
console.log("");
//display products in a store
console.log("Products in the store:");
let products = ["Laptop", "Smartphone", "Headphones", "Camera", "Smartwatch"];
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

console.log("");
console.log("");
console.log("-----");
console.log("");
console.log("");


//calculate the total price of items in a shopping cart
let cart = [
    { name: "Laptop", price: 999.99 },
    { name: "Smartphone", price: 499.99 },
    { name: "Headphones", price: 199.99 },
    { name: "Camera", price: 299.99 },
    { name: "Smartwatch", price: 149.99 }
];
let totalPrice = 0;
for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
}
console.log(`Total price of items in the shopping cart: $${totalPrice.toFixed(2)}`);

console.log("example of toFixed() method:");
console.log(totalPrice.toFixed(3));
console.log(totalPrice.toFixed(4));
console.log(totalPrice.toFixed(5));
//meaning of toFixed(2) is to round the total price to 2 decimal places, which is common for currency values.

