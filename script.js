const up = function from1To10(i) {
    console.log(i)

    if (i < 10) from1To10(++i)
}


up(1)


const down = function from10To1(i) {
    console.log(i)

    if (i > 0) from10To1(--i)
}

down(10)