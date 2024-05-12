class User {
    private city : string = "Raipur"
    constructor(
        public email:string,
        private name: string,
    ){
        this.email = email
        this.name = name
    }

    get getCity():string{   //getter
        return `${this.city}`
    }

    set setCity(city: string){ //setter
        this.city = city
    }
}

let Rudra = new User("r@r.com","Rudra")
Rudra.getCity

