module.exports = function check(str, bracketsConfig) {
  let points = 0;
  const LENGTH = str.length;

  str = [ ...str ];

  if (str.length % 2 !== 0) {
    return false;
  }

  while (str.length) {
    let firstCount = 0;
    let lastCount = 0;
    let lastIndex = -1;
    let bracketConfig = bracketsConfig.find(bracket => bracket[0] === str[0]);

    if (!bracketConfig) {
      return false;
    }

    for (let charIndex = 0; charIndex < str.length; charIndex++) {
      if (bracketConfig[0] === str[charIndex]) {
        firstCount++;
      }
      else if (bracketConfig[1] === str[charIndex]) {
        lastCount++;
        if (firstCount === lastCount) {
          lastIndex = charIndex;
          break;
        }
      }
    }

    if (lastIndex % 2 !== 0) {
      points++;
      str.shift();
      str.splice(lastIndex - 1, 1);
    } else {
      return false;
    }
  }

  return points === LENGTH / 2;
}