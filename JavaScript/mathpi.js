const BMW = {
    name : "BMW M5",
    makeYear : "2023",
    noOfWheels : 4
}

console.log(Object.getOwnPropertyDescriptor(BMW,"name"));

Object.defineProperty(BMW,"name",{
    writable : false,
    enumerable : false,
})


console.log(Object.getOwnPropertyDescriptor(BMW,"name"));