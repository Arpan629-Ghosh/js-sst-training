const countVowels = (str) => {
  let vowelCnt = 0;
  const words = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    switch (words[i]) {
      case "a":
        vowelCnt++;
        break;
      case "e":
        vowelCnt++;
        break;
      case "i":
        vowelCnt++;
        break;
      case "o":
        vowelCnt++;
        break;
      case "u":
        vowelCnt++;
        break;
      default:
        continue;
    }
  }
  return vowelCnt;
};

console.log(countVowels("Arpan Ghosh"));
