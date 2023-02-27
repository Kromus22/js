let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {
  return arr.slice().sort();
}

let sorted = copySorted(arr);

alert(sorted);
alert(arr);