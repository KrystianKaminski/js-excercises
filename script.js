// own forEach

Array.prototype.myOwn = function(callback) {
    const arr = []
    for (let i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i, this))
    }
    return arr
}

const arr = [1,2,3,4]
