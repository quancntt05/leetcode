const isIsomorphic = function(s, t) {
    const sArr = s.split('')
    const tArr = t.split('')
    const map = new Map()
    for (let idx = 0; idx < sArr.length; idx++) {
      if(map.has(sArr[idx])) {
        if (map.get(sArr[idx]) !== tArr[idx]) return false
      } else {
        if(!Array.from(map.values()).includes(tArr[idx])) {
          map.set(sArr[idx], tArr[idx])
        } else {
          return false
        }
      }
    }
    return true
};

console.log(isIsomorphic("foo", "abb"))
console.log(isIsomorphic("badc", "baba"))
console.log(isIsomorphic("egcd","adfd"))
console.log("/////////////////////////////////////////////")

//https://leetcode.com/problems/is-subsequence/
const isSubsequence = function(s, t) {
  let sIndx = 0;
  for (let idx = 0; idx < t.length; idx++) {
    if(s[sIndx] === t[idx]) {
      sIndx++
    }
  }
  return sIndx === s.length
};

console.log(isSubsequence("abc", "ahbgdc")) //true
console.log(isSubsequence("axc", "ahbgdc")) //false
console.log(isSubsequence("ab", "baab"))    //true
console.log(isSubsequence("acb", "ahbgdc")) //false
console.log("/////////////////////////////////////////////")
