function addTwoNums(a: number, b: number): number {
    return a + b
}

const loginUser = (name: string, email: string, 
isPaid: boolean = false) => {

}

const aFoo = (s: string): string => {
    return "Ye le prasadi"
}

const getValue = (myVal: number): boolean | string => {
    if (myVal > 5) {
        return true
    }
    return "200 OK"
}

function consoleError(errmsg: string): void {
    console.log(errmsg)
}

//the never type respresents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program. 
function handleErro(errmsg: string): never {
    throw new Error(errmsg);
}
   
loginUser("Basuki", "basuki@codes", false)
addTwoNums(5, 2)

export {}
