// to make a variable of more than one type
const data3: (string | number)[] = ["1", "2", 3]

var afoo = (a:string | number): string | number => {
    return a
}

let seatAllotement: "aisle" | "middle" | "window"

seatAllotement = "aisle"
seatAllotement = "middle"