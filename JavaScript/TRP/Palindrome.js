function isPalindrome(num){
    let cnum = num;
    let r =0;
    let result =0;
    while(num){
        r = num%10;
        result = result*10+r;
        num = Math.floor(num/10); 15
    }
    console.log(result);
}

isPalindrome(151);