/* Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structure as the first array.
*/

function nesting(arr1, arr2) {
    return arr1 == arr2
}

// should return true
console.log(nesting([ 1, 1, 1 ], [ 2, 2, 2 ])) // true
console.log(nesting([ 1, [ 1, 1 ] ], [ 2, [ 2, 2 ] ])) // true

console.log(nesting([ 1, [ 1, 1 ] ], [ [ 2, 2 ], 2 ])) // false
console.log(nesting([ 1, [ 1, 1 ] ], [ [ 2 ], 2 ])) // false

// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );  