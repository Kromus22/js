let arr = [1, 2, 3];

const shuffle = (arr) => {
  let currentIndex = arr.length, randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}

shuffle(arr);
console.log(arr);