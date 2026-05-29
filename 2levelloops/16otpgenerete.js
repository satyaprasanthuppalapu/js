// OTP Generator Program
//Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive)
//Math.floor() rounds a number down to the nearest integer
let randomNum = Math.random();
console.log("randomnum: " + randomNum);
let randomNumX10 = randomNum * 10;
console.log("randomnumx10: " + randomNumX10);
let randomNumX10Floored = Math.floor(randomNumX10);
console.log("randomnumx10floored: " + randomNumX10Floored);

var len = 6;
var result = '';

for (var i = 0; i < len; i++) {
    var num = Math.floor(Math.random() * 10);
            //Generate a random digit between 0 and 9
    result += num;
}

console.log("OTP: " + result);