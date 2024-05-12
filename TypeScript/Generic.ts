const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}


function identityTwo(val : any): any{
    return val;
}


function identityThree<Type>(val: Type) : Type { //Generic
    return val;
}

// Type is just a variable over hear
//it is almost like any but when we pass hai string then it will return string
// but in any if we give string as an input and it can return number as an output too.

function identityFour<J>(val:J): J{
    return val;
}

interface Bootle{
    brand : string,
    type : number
}

//identityFour<Bootle>({})

function getSearch<Type>(products: Type[]):Type {
    return products[3]
}

const getSearchMore = <Type>(products : Type[]):Type => {
    return products[3]
}

function anotherFunction<T, U extends number>(val1: T,val2: U): object {
    return {
        val1,
        val2
    }
}   

anotherFunction(3,4.6)

interface Quiz{
    name : string;
    type : string
}

interface Course{
    name : string,
    author :  string,
    subject : string
}

class Sellable<T>{   //Generic Class
    public cart : T[] = []

    addToCart(products : T){
        this.cart.push(products)
    }
}