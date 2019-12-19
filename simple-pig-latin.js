/* 18 Dec 2019 */

function pigIt(str) {
    var splitted = str.split(' ')

    var temp = ''

    for (var i = 0; i < splitted.length; i++) {
        if (i !== splitted.length - 1) {
            temp += splitted[i].slice(1) + splitted[i][0] + 'ay' + ' '
        }
        else if (/^[a-zA-Z0-9]*$/.test(splitted[i][0]) == false) {
            temp += splitted[i]
        } else {
            temp += splitted[i].slice(1) + splitted[i][0] + 'ay'
        }
    }
    return temp
}


console.log(pigIt('Pig latin is cool ?')); // igPay atinlay siay oolcay ?
console.log(pigIt('Hello world !'));     // elloHay orldway !