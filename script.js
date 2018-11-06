const numbers = [1, 2, 3, 4, 5, 6]

Array.prototype.myOwnForFilter = function(func) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
      if (func(this[i], i, this)) {
          newArray.push(this[i])
      }
    }
    return newArray

}



const result = numbers.filter((e) => e % 2)
const result1 = numbers.myOwnForFilter(e =>  e % 2 === 0)

console.log(result) // [1,3,5]
console.log(result1) // [2,4,6]