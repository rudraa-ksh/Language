let score: number | string = "123"
score = 13;
score = true;  // error

type User = {
    name: string;
    id :  number
}

type Admin = {
    name: string;
    id :  number
}

let rudra : User | Admin = {name: "Rudra", id : 123}

function getId( id : number | string) {
    //id.toLowercase() Not allowed as number can also be given as an input
    if( typeof id === "string"){
        id.toLowerCase() // not it will not
    }
}

const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
const data3: (string | number)[] = [1,2,3, "4"]

let pi:3.14

pi = 3.14 // no error
pi = 3.145 //Error


