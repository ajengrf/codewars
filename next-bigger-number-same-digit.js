function bigger(n) {
    var numStr = String(n)
    var arrNum = []

    // ngesplit
    for (let i = 0; i < numStr.length; i++) {
        arrNum.push(numStr[i])
    }

    // cek dari belakang, kalo ada angka yg lebih kecil catet indexnya, break
    var index = -1
    for (let j = arrNum.length - 1; j >= 0; j--) {
        if (arrNum[j - 1] < arrNum[j]) {
            index = j - 1
            break
        }
    }

    // cari angka yg terbesar pertama dari angka index tadi
    if (index > -1) {
        var run = true
        while (run) {
            run = false
            for (let k = index; k < arrNum.length; k++) {
                if (arrNum[k] > arrNum[k + 1] && arrNum[k] > arrNum[index] && arrNum[k + 1] > arrNum[index]) {
                    [arrNum[k], arrNum[k + 1]] = [arrNum[k + 1], arrNum[k]]
                    run = true
                }
            }

        }
    }

    // swap angka index dengan angka terbesar pertama
    [arrNum[index], arrNum[index + 1]] = [arrNum[index + 1], arrNum[index]]

    // angka setelah angka terbesar pertama, di sort dari yg terkecil
    var run = true
    while (run) {
        run = false
        for (let l = index + 1; l < arrNum.length; l++) {
            if (arrNum[l] > arrNum[l + 1]) {
                [arrNum[l], arrNum[l + 1]] = [arrNum[l + 1], arrNum[l]]
                run = true
            }
        }
    }
    if (index == -1) {
        return -1
    }
    return Number(arrNum.join(''))
}


console.log(bigger(9)) // -1
console.log(bigger(12)) // 21
console.log(bigger(513)) // 531
console.log(bigger(2017)) // 2071
console.log(bigger(401053785)) // 401053857
console.log(bigger(914032)) // 914203
console.log(bigger(534976)) // 536479
console.log(bigger(9876543210)) // -1


/* SOLUTION FROM WEB

function bigger(n) {
    if (n === reverseSortDigits(n)) return -1

    let nSorted = sortDigits(n)

    while (true) {
        n += 1
        if (sortDigits(n) === nSorted) return n
    }
}

function splitDigits(d) {
    return String(d).split('')
}

function sortDigits(d) {
    return Number(splitDigits(d).sort().join(''))
}

function reverseSortDigits(d) {
    return Number(splitDigits(d).sort().reverse().join(''))
}
*/