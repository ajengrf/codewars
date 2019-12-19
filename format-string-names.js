function list(names) {
    //your code here
    if (names.length == 2) {
        return names[0].name + ' & ' + names[1].name
    } else if (names.length == 1) {
        return names[0].name
    } else if (names.length <= 0) {
        return ''
    }

    var count = 1
    var tampungNama = ''
    for (var i = 0; i < names.length; i++) {
        tampungNama += names[i].name + ', '
        if (names.length - count == 2) {
            tampungNama += names[count].name + ' & ' + names[count+1].name
            break
        }
        count ++
    }
    return tampungNama
}

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Ajeng' }, { name: 'Rachma' }]))
// Bart, Lisa, Maggie, Ajeng & Rachma

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]))
// returns 'Bart, Lisa & Maggie'

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]))
// returns 'Bart & Lisa'

console.log(list([{ name: 'Bart' }]))
// returns 'Bart'

console.log(list([]))
// returns ''


/* JAWABAN DI WEB
function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }
 */

var count = 0
for (var i = 0; i < walk.length; i++) {
    if (walk[i] == 'n' || walk[i] == 'w') {
        count += 1
    } else if (walk[i] == 's' || walk[i] == 'e') {
        count -= 1
    }
}
if (count == 0) {
    return true
}
return false