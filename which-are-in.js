/* Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []
*/

function inArray(array1, array2) {
    var sorted = array2.sort()

    var tmp = []
    for (let j = 0; j < array1.length; j++) {
        run = -1
        for (let i = 0; i < array2.length; i++) {
            for (let k = 0; k < tmp.length; k++) {
                if (tmp[k] == array1[j]) {
                    run = k
                }
            }
            if (run == -1) {
                if (array2[i].includes(array1[j])) {
                    tmp.push(array1[j])
                }
            }
        }
    }
    return tmp.sort()
}


a1 = ["lively", "alive", "harp", "sharp", "armstrong"]

a2 = ["xyz", "live", "strong"]
console.log(inArray(a2, a1)) // ["live", "strong"]

a3 = ["live", "strong", "arp"]
console.log(inArray(a3, a1)) // ["arp", "live", "strong"]

a4 = ["tarp", "mice", "bull"]
console.log(inArray(a4, a1)) // []



/* SOLUTION FROM WEB
function inArray(a1, a2) {
    var r = [];

    for (var i = 0; i < a1.length; i++) {
        var s1 = a1[i];

        for (var j = 0; j < a2.length; j++) {
            var s2 = a2[j];

            if (s2.indexOf(s1) != -1 && r.indexOf(s1) == -1) {
                r.push(s1);
            }
            console.log(s2, '<')
        }
    }

    return r.sort();
}
*/