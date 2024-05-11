type User = {
    readonly id: string;
    name: string;
    email : string;
    isActive : boolean
    credirCards?: number //optional parameter
}


let myUser: User = {
    id: "12345",
    name: "Rudra",
    email: "r@google.com",
    isActive : true
}

//myUser.id = "New"   Error (Readonly)

type cardNumber = {
    cardnumber : string
}

type cardDate = {
    carddate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

