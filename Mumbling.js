function format(str, num) {
    var newStr = str.toUpperCase()

    while (newStr.length !== num) {
        newStr += str.toLowerCase()
    }
    return newStr
}

function accum(str) {
    var hasilArr = []

    for (var i = 0; i < str.length; i++) {
        hasilArr.push(format(str[i], i+1))
    }
    return hasilArr.join('-')
}
console.log(accum("abcd")) //-> "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")) //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")) //-> "C-Ww-Aaa-Tttt"

/* JAWABAN DI WEB
function accum(str) {
  var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}
*/