const myArr = [0,1,2,3,4,5]
const newArr = ["Rudra", "Abdur"]
const myArr2 = new Array(1,2,3,4,5)


console.log(myArr[0]);
myArr.push(56)  //insert at end 
console.log(myArr);
myArr.pop()     //remove at end 
console.log(myArr);

myArr.unshift(56)  //insert at first
console.log(myArr);
myArr.shift()      //remove at first
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr2 = myArr.join() //it binds and convert to string
console.log(newArr2);

console.log("A ",myArr);
const newArr3 = myArr.slice(1,3)
console.log(newArr3);
console.log("B ",myArr)
const newArr4 = myArr.splice(1,3)
console.log(newArr4);
console.log("C ",myArr)