function multiplyBy5(num) {
    return num*5
}

multiplyBy5.power = 2  // using is it as an object

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // {}

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () { // creating own functions for prototype
    this.score++
}

createUser.prototype.displayUser = function () {
    console.log(`Name is ${this.username}`);
}

const rudra = new createUser("Rudra",15)
const abdur =  new createUser("Abdur", 25)

rudra.displayUser()