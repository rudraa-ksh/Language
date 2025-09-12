function test(a,b) {
    if(a === 6 || b === 6 || ((a-b) === 6) || ((a+b) === 6) ){
        console.log("yes")
    }else{
        console.log("No")
    }
}

test(2,7);