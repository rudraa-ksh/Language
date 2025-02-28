(function car(){
    console.log("Vrooom");
})();

(() =>(
    console.log("Vroom Vroom")
))();


((name) =>(
    console.log(`Vroom Vroom ${name}`)
))("BMW");