if("2"!=2){
    console.log("It the statement is True");
}
else{
    console.log("The statement is False");
}
if(5 !== 5){
    console.log("True");
}
else{
    console.log("False");
}

if(5 !== "5"){
    console.log("True");
}
else{
    console.log("False");
}


//Shortend Notation

if(500>200) console.log("Greater");


if(0){  // If 5000 then it will be treated as True.
    console.log("Error");
}
else{
    console.log("No error");
}


//Switch Case

switch (2) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    default:
        console.log("Invalid Input");
        break;
}


//Falsy Value
false, 0, -0, BigInt, 0n, "", null, NaN, undefined

//All other are truthy value
" ",[],{}, function(){}

//Nullish Coalescing Operator(??): null undefined

let val,val1;
val = 5 ?? 10
val = null ?? 10
val = 10 ?? undefined
val1 = null ?? 10 ?? 20
console.log(val);
console.log(val1);


//ternary operator
//condition ? true : false

const price = 100;

price > 50 ? console.log("Costly"): console.log("Cheap");