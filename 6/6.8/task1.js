{
  const printNumbers = (from, to) => {
    let current = from;

    let timerId = setInterval(() => {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }

  printNumbers(1, 10);
}

{
  const printNumbers = (from, to) => {
    let current = from;

    setTimeout(function count() {
      console.log(current);
      if (current < to) {
        setTimeout(count, 1000);
      }
      current++;
    }, 1000);
  }

  printNumbers(1, 10);
}