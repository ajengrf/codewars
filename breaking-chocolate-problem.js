function breakChocolate(n, m) {
    if (n > 0 && m > 0) {
        return (n * m) - 1
    }
    return 0
}

console.log(breakChocolate(5, 5), 24)
console.log(breakChocolate(1, 0), 0)