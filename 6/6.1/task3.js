const fib = (n) => {
  let prev = 0, next = 1;
  for (let i = 0; i < n; i++) {
    let temp = next;
    next = prev + next;
    prev = temp;
  }
  return prev;
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(77));