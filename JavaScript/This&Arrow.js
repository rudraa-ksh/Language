const human ={
    username: "Rudra",
    price: 1599,
    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }
}

human.welcomeMessage()
human.username = "Sam"
human.welcomeMessage()


const animal = () => {
    let username = "Tiger"
    console.log(this.username);
}

//const animal = () => (consoole.log("Tiger"))

animal()
