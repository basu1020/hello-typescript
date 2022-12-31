"use strict";
function identity(val) {
    return val;
}
identity({ brand: "Nike", type: 10 });
// with arrow function. 
const getSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
