

const readNumber = () => {
  let num = prompt("Введите Ваше число", 0);
  do {
    num = prompt("Введите именно число", 0);
  } while (!isFinite(num));

  if (num === null || num === '') return null;

  return +num;
}

alert(`Ваше число: ${readNumber()}`);