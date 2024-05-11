function addNum(num: number) {
    return num+2
}

addNum(5)

function getUpper(val: string){
    return val.toUpperCase();
}

getUpper("Rudra")


function Employee(email: string, ispaid: boolean){} {
    
}

Employee("rudr@google.com",true)



function user(email: string, isLoggedIn: boolean = true){} {
    
}

user("rudr@google.com")


function Car(Sound: string) : string {
    return "Vroom Vroom!"
}


const heros = [1,2,3]
heros.map((hero) : string => {
    return `${hero}`
})


function handleError(msg: string): never {
    throw new Error(msg);
}

export{}