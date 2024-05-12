interface User  {
    email: string;
    id :number
    passwd?: string
    // startTrail: () => string
    startTrail():string
    getCoupon(couponname:string): number
}

interface User {
    githubToken : string
}

const Rudra : User={email: "r@r.com", id: 123,
    startTrail: () =>{
        return "Trail Started"
    },
    githubToken: "github",
    getCoupon: (name : "FIRST10") => {
        return 10
    }
}

interface Admin extends User {
    role : "admin" | "ta" | "learner"
}

const Rahul : Admin={email: "r@r.com", id: 123,
    startTrail: () =>{
        return "Trail Started"
    },
    role : "admin",
    githubToken: "github",
    getCoupon: (name : "FIRST10") => {
        return 10
    }
}