//bad behaviour of objects. 
var User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
};
function createUser(user) {
    return user;
}
createUser({ name: "", email: "", isActive: true });
var cardDetails = { cardNumber: 121, cardDate: "02/22", cvv: 445 };
