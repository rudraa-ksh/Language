let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.getSeconds());
let newDate = new Date(2023,0,23)//In Javascript month starts from 0
console.log(newDate.toDateString());
let createdDate = new Date(2023,0,23, 5, 30)
console.log(createdDate.toLocaleString());
let formatedDate = new Date("01-2023-24")  //in this format month starts from 1
console.log(newDate.toDateString());

let timeStamp = Date.now()
console.log(timeStamp);
console.log(createdDate.getTime());
console.log(createdDate.getSeconds());
console.log(myDate.getMonth());
console.log(myDate.getDay());

//Customization
newDate.toLocaleString('default',{
    weekday: 'long'
})