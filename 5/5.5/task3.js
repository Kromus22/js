let arr = [5, 3, 8, 1];

const filterRangeInPlace = (arr, a, b) => {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

filterRangeInPlace(arr, 1, 4);