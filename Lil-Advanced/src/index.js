console.log("Typescript is here still");
var value = 23;
var anArray = [];
anArray.push(1);
anArray.push(2);
console.log(anArray);
var foo = function (val) {
    if (val > 5) {
        return true;
    }
    else {
        return false;
    }
};
// Classes
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "Patna";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var basuki = new User("basuki@gmail.com", "basuki");
console.log(basuki.email, basuki.name, basuki.city);
var nums = [10, 20, 30];
console.log(nums.slice(0, 1));
