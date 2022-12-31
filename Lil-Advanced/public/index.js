"use strict";
console.log("Typescript is here still");
let value = 23;
let anArray = [];
anArray.push(1);
anArray.push(2);
console.log(anArray);
let foo = (val) => {
    if (val > 5) {
        return true;
    }
    else {
        return false;
    }
};
// Classes
class User {
    constructor(email, name) {
        this.city = "Patna";
        this.email = email;
        this.name = name;
    }
}
const basuki = new User("basuki@gmail.com", "basuki");
console.log(basuki.email, basuki.name, basuki.city);
let nums = [10, 20, 30];
console.log(nums.slice(0, 1));
