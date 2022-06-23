export const lowestToHighest = (products) => {
    const lowToHigh = products.sort(function(a, b){
        return a.price - b.price;
    })

    return lowToHigh;
}

export const highestToLowest = (products) => {
    const highToLow = products.sort(function(a, b){
        return b.price - a.price;
    })

    return highToLow;
} 

