
const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}

//Maps

const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")

console.log(map);

for (const [key, value] of map) {
    console.log(key, value);
}

const myObject = {  //object can be iterated using forof
    game1 : "ETS2",
    game2 : "Forza Horizon"
}

// for (const i of myObject) {
//     console.log(i);
// }

for (const key in myObject) {
    console.log(key, myObject[key]);
}

for (const key in arr) {
    console.log(key); // it will return key /index of array
    console.log(arr[key]); //it will return the value/element
}

arr.forEach(function (element){
    console.log(element);
} )

