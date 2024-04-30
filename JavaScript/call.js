function setUsername(username) {
    this.username = username
}

function createUser(username, email, password) {
    this.email = email
    this.password = password
    //setUsername(username) 
    // it will call the above function but it will not work.
    // As the it after after excution of the function it will me removed from the call stack and
    // the this of the that function will also be deleted therefore we will loose the data that was stored in that this context
    // therefore we pass the creatUsers's this to store the data in that this and that it will show the output
    setUsername.call(this, username)  // 
}

const User1 =  new createUser("rudrak04sh","rudra@google.com","123")
console.log(User1);