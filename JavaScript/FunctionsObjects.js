function LetsTakeInput(num1){
    return num1
}

console.log(LetsTakeInput(100,200,300))


function Lets2TakeInput(val, ...num1){
    return num1
}

console.log(Lets2TakeInput(100,200,300))

const user ={
    username: "hitesh",
    price : 199
}

function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)


const num = [1,2,3,4,5]

function SecondValue(arr){
    return arr[1]
}

console.log(SecondValue(num))