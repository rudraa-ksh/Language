// let myName = "Rudra    "

// console.log(myName.truelength());

let myHeros = ["IronMan","Spiderman"]

let heropower = {
    Ironman : "Tech",
    Spiderman : "Web",
    getSpiderPower : function(){
        console.log(`Spider can use ${this.Spiderman}`);
    }
}

Object.prototype.Rudra = function(){  //accessed top level heirarchy and create a new method
    console.log("Rudra is present in all objects");
}

heropower.Rudra()

myHeros.Rudra()

Array.prototype.heyRudra = function(){ // it is created for arrays
    console.log("Hey! Rudra");
}

myHeros.heyRudra()
heropower.heyRudra() // thus cannot use it on objects

//Inheritance

const Teacher = {
    makeVideo : true
}

const TeachingSuppport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__ : Teacher
}

TeachingSuppport.__proto__ = Teacher

//Modern Syntax

Object.setPrototypeOf(TeachingSuppport, Teacher)  //Prototypial Inheritance