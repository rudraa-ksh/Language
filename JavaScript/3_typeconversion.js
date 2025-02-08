let score = "33"
console.log(typeof score);
console.log(typeof Number(score));
console.log(typeof score);

let value = "33abc"
console.log(typeof value);
let valueinnumber= Number(value)
console.log(typeof valueinnumber);
console.log(valueinnumber); // true results 1, null results 0 and undefined results NaN and string results NaN
console.log(typeof NaN); 