function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert(bound.test); // что выведет? почему?

//у bound же нет никакого теста, ему некуда обратиться. ошибка будет.