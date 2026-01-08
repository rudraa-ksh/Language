

function optPalindrome(num) {
    let str = num.toString();
    let length  =  str.length;
    for(let i=0;i<Math.floor(length/2);i++){
        if(str[i] !== str[length-1-i]){
            return "Not a palindrome"
        }
    }   
    return "Is a palindrome";
}

console.log(optPalindrome(12521))