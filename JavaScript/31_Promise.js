const promiseOne = new Promise(function(resolve, reject){
    // Do an Async tasks
    setTimeout(function () {
        console.log("Async task completed");
        resolve()
    },1000)
})


//then,catch and finally
promiseOne.then(function(){
    console.log("Promise Consumed");
})

//Another approach
new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Rudra",
    email : "example@google.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour =  new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username:"Rudra",
        passwd: "123"})
        }else{
            reject("Error: Something went wrong")
        }
    },1000)
})

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function (error){
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected");
// })


//Async Await
async function consumePromiseFour(){
    try {
        const response = await promiseFour
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFour()

// async function getAllUser(){
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
// }

//getAllUser()

fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))