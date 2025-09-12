function arm(num) {
    const length = num.toString();
    let result =0;
    for(let i=0;i<length.length; i++){
        result += length[i]**length.length;
    }
    if(result == num){
        console.log(`${length} is a armstrong number`);
    }else{
        console.log(`${length} is not a armstrong number`)
    }
}

arm(1634)