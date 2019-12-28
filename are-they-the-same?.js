function same(array1, array2) {

    if (Array.isArray(array1) == false || Array.isArray(array2) == false) {
        return false
    }
    if (array1.length !== array2.length) {
        return false
    }

    let compare = []
    for (let i = 0; i < array1.length; i++) {
        compare.push(Math.pow(array1[i], 2))
    }

    var sortedCompare = compare.sort((a, b) => a - b)
    var sortedArray2 = array2.sort((a, b) => a - b)
    for (let j = 0; j < sortedArray2.length; j++) {
        for (let k = 0; k < sortedCompare.length; k++) {
            if (j == k) {
                if (sortedArray2[j] !== sortedCompare[k]) {
                    return false
                }
            }
        }
    }
    return true
}

var a = [121, 144, 19, 161, 19, 144, 19, 11]
var b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(same(a, b)) // true

var a1 = [121, 144, 19, 161, 19, 144, 19, 11]
var b1 = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(same(a1, b1)) // false

var a2 = [34, 54, 51, 75, 51, 88]
var b2 = [1156, 2916, 2602, 5625, 2601, 7744]
console.log(same(a2, b2)) // false

// var a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// var a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
// console.log(same(a1, a2), '<<' , true);

var a3 = [64, 38, 44, 63, 56, 70, 98, 19, 93, 53, 21, 67, 45, 21, 99, 8, 42] 
var b3 = [4096, 1444, 1936, 3969, 3136, 4900, 9604, 361, 8649, 2809, 441, 4489, 2025, 441, 9801, 64, 1764]
console.log(same(a3, b3))

var a4 = [2, 2, 3]
var b4 = [4, 9, 9]
console.log(same(a4, b4)) // false

var a5 = []
var b5 = []
console.log(same(a5, b5)) // true