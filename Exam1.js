function encodeString (word) {
  // console.log(word);
  let result = ''
  let count = 0

  for (let i = 0 ; i < word.length ; i++) {
    // console.log(word[i], i)
    if ( word[i] == word[i+1] ) {
      count++
      // console.log(word[i], count);
    } 
    else {
      if ( count == 0 ) {
        result += word[i]
      } else {
        result += `${count+1}${word[i]}`
      }
      count = 0
    }
    
  }
  return result
}

console.log(encodeString('aaaabcccaaa')) //output: 4ab3c3a