const numbers = [1, 2, 3, 4, 5, 6]

Array.prototype.myOwnForFind = function(func) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
      if (func(this[i], i, this)) {
        return this[i]
      }
    }
    return undefined

}

const result = numbers.find( e => e % 2 === 0 )
console.log(result)

const result1 = numbers.myOwnForFind( e => e % 2 === 0)
console.log(result1)