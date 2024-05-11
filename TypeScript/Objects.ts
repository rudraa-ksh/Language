const User = {
    name: "Rudra Kashyap",
    isActive : true
}


function createUser({name : string, ispaid: boolean}){}
createUser({name: "Rudra", ispaid : true})

function createCourse():{name : string, price: number}{
    return {name:"react", price: 399}
}  //return an object

export {}