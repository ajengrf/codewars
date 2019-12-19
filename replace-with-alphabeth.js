/* 19 Dec 2019 */

function alphabetPosition(text) {
    var abj = 'abcdefghijklmnopqrstuvwxyz'

    /* Cara ini salah, karena diakhir ada spasinya */
    // var res = ''
    // for (let i = 0; i < text.length; i++) {
    //     for (let j = 0; j < abj.length; j++) {
    //         if (text[i+1] == undefined && text[i].toLowerCase() == abj[j]) {
    //             res += j + 1 
    //         } else if (text[i].toLowerCase() == abj[j]) {
    //             res += j + 1 + ' '
    //         }
    //     }
    // }
    // return res


    /* Ini yang bener, tapi pake built-in function hehe */

    var splitted = text.split('')
    var res = []

    for (let i = 0; i < splitted.length; i++) {
        for (let j = 0; j < abj.length; j++) {
            if (splitted[i].toLowerCase() == abj[j]) {
                res.push(j + 1)
            }
        }
    }
    return res.join(' ')
}

console.log(alphabetPosition("The narwhal bacons at midnight."))
console.log(alphabetPosition("ajeng"))