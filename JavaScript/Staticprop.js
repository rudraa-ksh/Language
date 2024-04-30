class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static createID(){
        return `123`
    }
}

const rudra = new User("rudraksh")
console.log(User.createID());
console.log(rudra.createID()); // it will return error