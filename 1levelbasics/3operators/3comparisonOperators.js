console.log(10 == "10");   // 10 equals 10 → true only checks for value not type, so it converts string "10" to number 10 and then compares, so true.
console.log('Type of "10": ' + typeof "10");  // "string"
console.log('Type of 10: ' + typeof 10);   // "number"
console.log(10 === "10");  // small logic between == and ====, === checks for both value and type not only value like "**10 === 10 → true**"  but false if type is different like "**10 === "10" → false**".tip use === for comparison to avoid unexpected type coercion.
console.log(10 != 5);      // 10 not equal 5 → true
console.log(10 > 5);       // 10 greater than 5 → true
console.log(10 < 5);       // 10 less than 5 → false
console.log(10 >= 10);     // equal allowed → true
console.log(10 <= 5);      // false
