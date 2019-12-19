var str = "How can mirrors be real if our eyes aren't real";
var tampung = ''

function string(str) {

    for (var i = 0; i < str.length; i++) {
        if (str[i-1] == ' ') {
            tampung += str[i].toUpperCase()
        } else {
            tampung += str[i]
        }
    }
    return tampung
}

console.log(string(str))