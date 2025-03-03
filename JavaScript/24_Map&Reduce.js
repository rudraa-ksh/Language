const Coding = ["JS","Python","C++"]

// const values = Coding.forEach((Item)=>{
//     return Item;
// })

// console.log(values); // undefined


const Num = [1,2,3,4,5,6,7,8,9];
const newNums = Num.filter((num) => num > 4)
console.log(newNums);

const Nums = []

Num.forEach((num) => {
    if (num>4){
        Nums.push(num)
    }
});

console.log(Nums);

// we cannot assign conditions in map
const Integers = Num.map((num) => 
    (num + 10)
)

console.log(Integers);


//chaining
const mynum = Num
    .map((num) => num*10 )
    .map((num) => num +1 )
    .filter((num) => num>=40)

console.log(mynum);