//fourth task
let num = +prompt('Введите число, которое необходимо возвести в степень:', 0);
let powNum = +prompt('Введите степень в которую хотите возвести', 0);

function pow(x, n) {
  if (n > 0) {
    return alert(x ** n);
  }
  return alert('Введены некоректные числа');
}

pow(num, powNum);
