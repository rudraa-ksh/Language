function lucky(num) {
    let r = 0;
    while (num) {
        r = num%10;
        if(r === 7){
            return true
        }
        num = Math.floor(num/10);
    }
    return false
}

console.log(lucky(125489));

