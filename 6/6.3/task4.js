const sum = (a) => {

  return function (b) {
    return a + b;
  };

}

console.log(sum(2)(2));
console.log(sum(2)(3));