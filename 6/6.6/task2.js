const sum = (a) => {

  let currentSum = a;

  function foo(b) {
    currentSum += b;
    return foo;
  }

  foo.toString = function () {
    return currentSum;
  };

  return foo;
}