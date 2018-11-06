function log10Times (i) {
    i = i || 0

    console.log('log10Times')

    if (i < 10) log10Times(++i)
}

log10Times()