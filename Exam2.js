function changeToObject(string) {
  let result = {}
  string = string.split('').sort().join('')
  
  for (let i = 0 ; i < string.length ; i++) {

        if (string[i] in result) {
          result[string[i]] += 1
        } else {
          result[string[i]] = 1
        }
    }  
  return result
}

function ransomNote(str1, str2) {
  let obj1 = changeToObject(str1)
  let obj2 = changeToObject(str2)
  return JSON.stringify(obj1) === JSON.stringify(obj2) 
}



console.log(ransomNote('abc', 'abc')) //true
console.log(ransomNote('abbc', 'abc')) //false
console.log(ransomNote('cba', 'abc')) //true
console.log(ransomNote('abcd', 'abc')) //false
      