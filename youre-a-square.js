var isSquare = function(n){
    return (Math.sqrt(n) % 1 === 0 ) 
  }

// var number = 0
// var hitung = Math.sqrt(number) % 1
// console.log(hitung)
console.log(isSquare(-1))
console.log(isSquare(4))
console.log(isSquare(3))