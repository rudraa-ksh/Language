const User = new Object() //Singleton
const User1 = {}  // Non-Singleton
console.log(User);

User.id = " 123abc"
User.name = "Sky"
console.log(User);

//Objects inside Objects

const RegularUser = {
    email : "rudrageneral@gmail.com",
    fullname: {fname:"Rudra", lname: "Kashyap"}
}

console.log(RegularUser.fullname.fname);


// objects Combine

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
console.log(Object.assign({},obj1,obj2)); // the first argument is the taget and the rest are source.
console.log(obj1);


//Using spread operator

const obj3 ={...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        Username: "Rudra",
        Email: "Rudra@gmail.com"
    },
    {
        Username: "Rudra",
        Email: "Rudra@gmail.com"
    },
    {
        Username: "Rudra",
        Email: "Rudra@gmail.com"
    },
]


console.log(users[1]);
console.log(users[1].Email);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1)); // return array


console.log(obj1.hasOwnProperty('1'));