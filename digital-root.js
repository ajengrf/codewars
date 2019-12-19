function digital_root(n) {
    // ...
    var temp = String(n)
    if (temp.length == 1) {
        return Number(temp)
    }
    var sum = 0
    for (var i = 0; i < temp.length; i++) {
        sum += Number(temp[i])
    }

    return digital_root(sum)
}

/* CARA ORANG LAIN

function digital_root(n) {
    return (n - 1) % 9 + 1;
}

*/


console.log(digital_root(16))
// => 1 + 6
// => 7

console.log(digital_root(942))
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

console.log(digital_root(132189))
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

console.log(digital_root(493193))
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2