const numbers = [1, 2, 3, 4, 5, 6]

Array.prototype.myOwnForMap = function(func) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        newArray.push(func(this[i], i, this))
    }
    return newArray

}



const result = numbers.myOwnForMap( e => 2 * e)

console.log(result)