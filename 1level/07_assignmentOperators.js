let x = 10;

x += 5;  // x = 10 + 5
console.log(x); // 15

x -= 3;  // x = 15 - 3, x value is overridden by new value from previous line x=+5 so x=15 in this line
console.log(x); // 12

x *= 2;  // x = 12 * 2 , x value is overridden by new value from previous line x=-3 so x=12 in this line
console.log(x); // 24

x /= 4;  // x = 24 / 4
console.log(x); // 6
