const getMaxSubSum = (arr) => {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, -2, -3]));

//забавно, что это решение я нашёл в инете.
//а быстрое решение, представленное в ответах, довольно прикольное
//и не сказать что сложное. думал немного не в том направлении.