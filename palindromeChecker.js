function palindromeChecker(str) {
  if (str.length === 0 ) {
    return true;
  }
  if (str[0] !== str[str.length-1]) {
    return false;
  }
  return palindromeChecker(str.slice(1,str.length-1))
}

console.log(palindromeChecker('racecar'))
console.log(palindromeChecker('josh'))









// function palindromeChecker(str) {
//   if (str.length === 0) {  //check if the string is empty
//     return true;
//   }
//   if (str[0] !== str[str.length-1]){ //check to make sure the first and last letter are not the same
//     return false
//   }
//   return palindromeChecker(str.slice(1,str.length-1)) //call the function again but going to the 2nd letter and 2nd to last letter
// }
//
// console.log(palindromeChecker('mom')) //true
// console.log(palindromeChecker('dad')) //true
// console.log(palindromeChecker('racecar')) //true
// console.log(palindromeChecker('josh')) //false
