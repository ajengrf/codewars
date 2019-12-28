/* ONLY WORK FOR 3 DESTINATION - UNFINISHED - SKIPPED

function chooseBestSum(t, k, ls) {
    // your code
    var res = []
    for (let i = 0; i < ls.length; i++) {
        for (let j = i + 1; j < ls.length; j++) {
            for (let k = j + 1; k < ls.length; k++) {
                res.push([ls[i], ls[j], ls[k]])
            }
        }
    }
    var resSum = []
    var sum = 0
    for (let l = 0; l < res.length; l++) {
        for (let m = 0; m < res[l].length; m++) {
            sum += res[l][m]
        }
       resSum.push(sum)
       sum = 0
    }

    var compare = 0
    for (let n = 0; n < resSum.length; n++) {
        if (resSum[n] <= t) {
            if (resSum[n] > compare) {
                compare = resSum[n]
            }
        }
    }
    if (compare == 0) {
        return null
    }
    return compare
}

var ts = [50, 55, 56, 57, 58]
console.log(chooseBestSum(163, 3, ts), 163, '<')
var ts1 = [50]
console.log(chooseBestSum(163, 3, ts1), null, '<')
var ts2 = [91, 74, 73, 85, 73, 81, 87]
console.log(chooseBestSum(230, 3, ts2), 228, '<')
*/


/* SOLUTION FROM WEB
// helper find all subarrays 
function subArrays(arr){
  let kLengths = []; 
  if (arr.length === 1) return [arr];
  else {
  	subarr = subArrays(arr.slice(1));
  	return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
  }
}

// subArrays([1,2,3,4,5])

// helper to find all subarrays of length N within an array of arrays
function filterByLength(arr, n) {
  const result = arr.filter(a => a.length == n);
  return result;
}

function chooseBestSum(maxDist, towns, arr) {
    let subsets = filterByLength(subArrays(arr), towns); 
    let trip = []; 
    let myDist = 0; 
    console.log(subsets)
    for(var a of subsets){
      let sum = a.reduce((a,b)=>a+b);
      console.log(sum)
      if (sum <= maxDist && sum >= myDist) {
        myDist = sum; 
      }
    }
  return myDist;  
}


var ts = [50, 55, 56, 57, 58]
chooseBestSum(163, 3, ts) // 163 
*/