let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (arr) => {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return [...map.values()];
}

console.log(aclean(arr));