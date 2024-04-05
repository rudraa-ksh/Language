//declare symbol
const MySym = Symbol("key1")

const User1= {
    name : "Rudra",  /// here name is string}
    "Age" : 18,
    [MySym] : "Unique",
    city : "Raipur",
}




console.log(User1.name);
console.log(User1["name"]);
console.log(User1["Age"]);  // cannont use . operatorlog
console.log(User1[MySym]);


User1[MySym] = "Common"
console.log(User1[MySym]);

//Object.freeze(User1) // modification will not bhi allowed after this but no error will be shown
console.log(User1);

User1.greeting = function() {
    console.log(`Hello, ${this.name}`);
    console.log("Hello User");
}

console.log(User1.greeting());