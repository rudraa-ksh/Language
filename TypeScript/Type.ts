type user = { // used to create user defined type
    name: string;
    email : string;
    salary: number;
    isActive : boolean
}

function createuser(User : user): user{ //type user and returning user
    return {name: "", email : "", salary : 0, isActive : false}
}

createuser({name: "", email : "", salary : 0, isActive : false})