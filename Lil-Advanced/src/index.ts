console.log("Typescript is here still")

let value:number = 23
let anArray:number[] = []

anArray.push(1)
anArray.push(2)
console.log(anArray)

let foo = (val:number): boolean => {
    if (val > 5) {
        return true
    }
    else{
        return false
    }
}

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

    private _courseCount = 1
    protected _daysActive = 2

    readonly city: string = "Patna"
    constructor(
        public email: string,
        public name: string,
        private userId: number) 
        {}
    // getters and setters

    private deleteSomething() {
        console.log("token deleted")
    }

    get getAppleEmail(): string {
        return this.email;
    }
    get getName(): string{
        return this.name;
    }

    get CourseCount(): number {
        return this._courseCount
    }

    set setCourseCount(val:number) {
        if (val <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = val
    }
}

class InheritedUser extends User {
    set changeDaysActive(val: number){
        this._daysActive += val
     }
}

const basuki = new User("basuki@gmail.com", "basuki", 10)
console.log(basuki.email, basuki.name)


