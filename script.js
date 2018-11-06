function call10Times (func) {
    for (let i = 0 ; i < 10; i++) {
        func('bu')
    }
}

call10Times(console.log) // 10 times 'BU' in console



