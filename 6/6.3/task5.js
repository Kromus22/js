const inBetween = (a, b) => {
  return function (x) {
    return x >= a && x <= b;
  };
}

const inArray = (arr) => {
  return function (x) {
    return arr.includes(x);
  };
}