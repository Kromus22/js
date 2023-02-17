//first task
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?

//честно не смог дать ответа на этот вопрос.
//и отчасти оказался прав )) так как, оказывается, что будет undefined


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

//third task
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  }
};