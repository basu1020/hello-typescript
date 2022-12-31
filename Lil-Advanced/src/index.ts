console.log("Typescript is here still")

let value:number = 23
let anArray:number[] = []

anArray.push(1)
anArray.push(2)
console.log(anArray)

let foo = (val:number): boolean => {
    if (val > 5){
        return true
    }
    else{
        return false
    }
}

// Classes

class User {
    email: string
    name: string
    city: string = "Patna"
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

const basuki = new User("basuki@gmail.com", "basuki")
console.log(basuki.email, basuki.name, basuki.city)

let nums: number[] = [10,20,30]
console.log(nums.slice(0, 1))
