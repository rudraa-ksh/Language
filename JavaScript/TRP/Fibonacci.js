function fibo(params) {
    let a =0;
    console.log(a);
    let b=1;
    console.log(b);
    for(let i=0;i<8;i++){
        let c =a+b;
        console.log(a+b);
        a=b;
        b=c;
    }
}

fibo(8);