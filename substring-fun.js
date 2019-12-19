/* 18 Dec 2019 */

function nthChar(words) {
    
    var res = ''
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            if (i == j) {
                res += words[i][j]
            }
        }
    }
    return res
}

console.log(nthChar(['yoda', 'best', 'has'])) // yes


/* JAWABAN DI WEB
function nthChar(words){
 var str='';
 for (var i=0; i<words.length; ++i)
   str+=words[i][i];
 return str;
}
*/