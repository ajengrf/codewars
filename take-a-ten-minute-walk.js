function isValidWalk(walk) {
    //insert brilliant code here
    if (walk.length == 10) {
        var countN = 0
        var countS = 0
        var countW = 0
        var countE = 0

        for (var i = 0; i < walk.length; i++) {
            if (walk[i] == 'n') {
                countN += 1
            } else if (walk[i] == 's') {
                countS += 1
            } else if (walk[i] == 'e') {
                countE += 1
            } else if (walk[i] == 'w') {
                countW += 1
            }
        }

        if (countN == countS && countE == countW) {
            return true
        }
    }
    return false
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');

/* JAWABAN DI WEB
function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
}
*/