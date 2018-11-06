const numbers = [1, 2, 3, 4, 5, 6]

function myOwnForEach(arr, func, thisArg) {

    for (let i = 0; i < arr.length; i++) {
        func.call(thisArg ,arr[i], i, arr)
    }
    

}

myOwnForEach(numbers,
     function (e) {
        console.log(e, this)
}, {whatever: 'ever'})