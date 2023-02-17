//first task
function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert(a == b); // true

//если результатом выполнения обеих функций будет ссылка
//на один и тот же объект, то будет равенство.

//second task
function Calculator() {
  this.read = function () {
    this.numA = +prompt('Введите число a:', 0);
    this.numB = +prompt('Введите число b:', 0);
  };
  this.sum = function () {
    return this.numA + this.numB;
  };
  this.mul = function () {
    return this.numA * this.numB;
  };
}

let calculator = new Calculator();

calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

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