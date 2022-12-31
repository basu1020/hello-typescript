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
// class User {
//     email: string
//     name: string
//     private readonly city: string = "Patna"
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this._daysActive = 2;
        this.city = "Patna";
    }
    // getters and setters
    deleteSomething() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return this.email;
    }
    get getName() {
        return this.name;
    }
    get CourseCount() {
        return this._courseCount;
    }
    set setCourseCount(val) {
        if (val <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = val;
    }
}
class InheritedUser extends User {
    set changeDaysActive(val) {
        this._daysActive += val;
    }
}
const basuki = new User("basuki@gmail.com", "basuki", 10);
console.log(basuki.email, basuki.name);
