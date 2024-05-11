"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNum(num) {
    return num + 2;
}
addNum(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("Rudra");
function Employee(email, ispaid) { }
{
}
Employee("rudr@google.com", true);
function user(email, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = true; }
}
{
}
user("rudr@google.com");
function Car(Sound) {
    return "Vroom Vroom!";
}
var heros = [1, 2, 3];
heros.map(function (hero) {
    return "".concat(hero);
});
function handleError(msg) {
    throw new Error(msg);
}
