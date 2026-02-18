const checkPalindrome = (str) => {
  let original = str;
  let reverse = original.split("").reverse().join("");
  if (original === reverse) console.log("Palindrome");
  else console.log("Not palindrome");
};

checkPalindrome("ABCA");
