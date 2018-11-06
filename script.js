const numbers = [1, 2, 3, 4, 5, 6]

Array.prototype.myOwnForEach = function(func) {

    for (let i = 0; i < this.length; i++) {
        func (this[i], i, this)
    }
    

}

// myOwnForEach(numbers,
//      function (e) {
//         console.log(e, this)
// }, {whatever: 'ever'})