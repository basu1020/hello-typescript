interface User {
    readonly dbId : number, 
    email: string,
    userId: number,
    googleId?: string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

// reopening of an interface. 
interface User {
    githubToken: string
}

const example: User = {
    dbId: 22, email: "h@h.com", userId: 2211,
    startTrail: () => {return "hello"},
    getCoupon: (name: "hitesh10", off: 10) => {
        return 10
    },
    githubToken: "hi"
}

// inheritance

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const exampletwo: Admin = {
    dbId: 22, email: "h@h.com", userId: 2211,
    startTrail: () => {return "hello"},
    getCoupon: (name: "hitesh10", off: 10) => {
        return 10
    },
    githubToken: "hi",
    role: "ta"
}