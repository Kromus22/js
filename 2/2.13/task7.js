//seventh task
let n = 33;

isPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue isPrime;
  }

  alert(i);
}