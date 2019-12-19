function createPhoneNumber(numbers) {
    var angka = ''
    var koma = ''
    var numString = String(numbers)
    for (var i = 0; i < numString.length; i++) {
        if (numString[i] == ',') {
            koma += numString[i]
        } else {
            angka += numString[i]
        }
    }

    var telepon1 = ''
    var telepon2 = ''
    var telepon3 = ''

    for (j = 0; j < angka.length; j++) {
        if (j < 3) {
            telepon1 += angka[j]
        } else if (j < 6) {
            telepon2 += angka[j]
        } else if (j >= 6) {
            telepon3 += angka [j]
        }
    }
    return ('(' + telepon1 + ')' + ' ' + telepon2 + '-' + telepon3)
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // (123) 456-7890
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])