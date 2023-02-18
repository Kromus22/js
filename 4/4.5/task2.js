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
