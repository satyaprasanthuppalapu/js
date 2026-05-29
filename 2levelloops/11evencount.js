//counting even and odd
let num = [1,2,3,4,5,6,7,8,9,10];
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        evencount++;
    }
    else{        
        oddcount++;
    }
}
console.log("Even count:", evencount);
console.log("Odd count:", oddcount);