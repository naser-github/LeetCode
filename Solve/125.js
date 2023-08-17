/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const length = s.length;
    let char = "";
  
    let reverseString = "";
    let string = "";
  
    for (let i = 0; i < length; i++) {
      char = s[i].toLowerCase();
      if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
        string += char;
      }
    }
  
    for (let i = string.length - 1; i >= 0; i--) {
      reverseString += string[i];
    }
  
    return string === reverseString ? true : false;
  };
  
  console.log(isPalindrome("A man, a plan, a canal: Panama"));
  