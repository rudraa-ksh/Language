function detectType(val : number | string ){
    if( typeof val === "string"){
        return val.toLowerCase()
    }

    return val + 3
}

function provideID(id : string | null){
    if(!id){
        console.log(" Please provide ID");
        return
    }

    id.toLowerCase()
}

function logValue (x: Date | string){
    if(x instanceof Date){
        console.log(x.toISOString());
    }else{
        console.log(x.toLowerCase());
    }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet :  Fish | Bird) : pet is Fish {
    return (pet as Fish).swim !== undefined
}


function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }else{
        pet
        return "bird food"
    }
}

interface Circle {
    kind : "circle",
    radius : number
}

interface Square {
    kind : "square",
    side : number
}

interface Rectangle {
    kind : "rectangle",
    length : number,
    width : number

}

type shape = Circle | Square 
function getTrueShape(shape : shape) {
    if (shape.kind === "circle"){
        return Math.PI * shape.radius **2
    }
    return shape.side*shape.side
}

function getArea(shape: shape){
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius **2
            break;
        case "square":
            return shape.side*shape.side
            break
        case "square":
            return shape.side*shape.side
            break
        default:
            const defaultShape :never = shape
            return defaultShape 
    }
}