const sumInput = () => {
  let arr = [];
  while (true) {

    let value = prompt("Введите Ваше число", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    arr.push(+value);
  }

  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
}

alert(sumInput());