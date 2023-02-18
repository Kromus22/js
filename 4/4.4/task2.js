//second task
let calculator = {
  read() {
    this.numA = +prompt('Введите число a:', 0);
    this.numB = +prompt('Введите число b:', 0);
  },
  sum() {
    return this.numA + this.numB;
  },
  mul() {
    return this.numA * this.numB;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());