//bad behaviour of objects. 
const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
}

//this is an example of a function returning an object which has name and price.
// const createUser = () : {name:string, price: number} => {
//     return {name: "Sukku", price: 399}
// }

// TYPE Aliases. - we can create our own type.

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: User): User {
    return user
}

createUser({name: "", email: "", isActive: true})


// readonly keyworded property can't be changed and ? means it's optional.

type OneMoreUser = {
    readonly _id: string;
    name: string;
    email: string;
    cardNumber?: number;
}

// creating two types and joining them to form a third one

type cardNumber = {
    cardNumber: number
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let cardDetails = {cardNumber: 121,cardDate: "02/22", cvv: 445}

export {}