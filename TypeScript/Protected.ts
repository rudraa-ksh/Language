class User {
    protected city : string = "Raipur"
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

class subUser extends User{
    isFamily : boolean = true;
    changeCity(){
        this.city = "Raipur" // NOT accessible if private
    }
}


const Rudra = new User ("r@r.com","Rudra")