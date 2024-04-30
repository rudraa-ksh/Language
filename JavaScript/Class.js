class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const BMW = new User("m8","M8@bmw.com","123")
console.log(BMW.encryptPassword());
console.log(BMW.changeUsername());

//behind the scene

// function user(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// user.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// user.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const m5 = new user("m5","m5@bmw.com","123")
// console.log(m5.changeUsername());