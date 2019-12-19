/* 19 Dec 2019 */

function narcissistic(value) {
    // Code me to return true or false
    var numStr = String(value)

    var sum = 0
    for (let i = 0; i < numStr.length; i++) {
        sum += Math.pow(Number(numStr[i]), numStr.length)
    }
    return (sum == value)
}

console.log(narcissistic(371)) // true (3^3 + 7^3 + 1^3 = 371)
