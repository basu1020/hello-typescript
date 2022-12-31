function identity<Type>(val:Type):Type{
    return val
}

interface Bottle{
    brand: string,
    type: number
}

identity<Bottle>({brand: "Nike", type: 10}) 

// with arrow function. 
const getSearchProducts = <T,>(products: T[]): T => {
    const myIndex = 4
    return products[myIndex]
}