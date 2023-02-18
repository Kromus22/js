//third task
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.num = +prompt('Введите число:', 0);
    this.value += this.num;
  };
}

//хотя num можно опустить тут, и сразу прибавлять в value из промпта

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value);