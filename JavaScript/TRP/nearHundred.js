function nearHundred(num) {
    let result = false;
    const res = num%100;
    if( res<= 10  || res >=90){
        result = true;
    }
    console.log(result)
}

nearHundred();