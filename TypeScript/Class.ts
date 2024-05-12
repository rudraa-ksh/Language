// class User {
//     public email: string
//     #name : string
//     private readonly city : string = "Raipur"
//     constructor(email:string, name: string){
//         this.email = email
//         this.name = name
//     }
// }

class User {
    private readonly city : string = "Raipur"
    constructor(
        public email:string,
        private name: string,
    ){
        this.email = email
        this.name = name
    }
}

const rudra = new User("r@r.com","Rudra Kashyap")
rudra.email
// rudra.city Will give an error as it is declared as private.
//rudra.name same as above.

// # is from javaScrip and private is from TypeScript.
// default everything is public