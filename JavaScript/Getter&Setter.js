class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    get password(){  
        return this.npassword.toUpperCase()
    }

    set password(value){
        this.npassword = value
    }
}


const rudra = new User("rudraksh","rudra@gmail.com","abc")

console.log(rudra.password);

//using property

function user(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const BMW = new user("m5@bmw.com", "M5")

console.log(BMW.email);


//using objects

const Uuser ={
    _email : "rudra@gmail.com",
    _pass : "abc",

    get gemail(){
        return this._email.toUpperCase()
    },

    set gemail(value){
        this._email = value
    }
}

console.log(Uuser.gemail);