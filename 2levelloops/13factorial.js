//factorial of a number 1x2x3x4x5=120
let nums =  [1, 2, 3, 4, 5];
let factorial = nums[0];
for(let i=1;i<=nums.length-1;i++){
    factorial =  factorial * nums[i];
}
console.log(factorial);