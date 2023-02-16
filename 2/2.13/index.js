//first task
{
  let i = 3;

  while (i) {
    alert(i--);
  }

  //последним значением будет 1. потому что потом уже будет 0, а это не true и цикл не сработает.
}

//second task
{
  let i = 0;
  while (++i < 5) alert(i);
  //последним значением будет 4
}

{
  let i = 0;
  while (i++ < 5) alert(i);
  //последним значением будет 5, потому, что в отличии от первого примера
  //плюсы после переменной возвращают старое значение
}

//third task
for (let i = 0; i < 5; i++) alert(i);

for (let i = 0; i < 5; ++i) alert(i);
//в данных примерах переменная всегда будет задаваться сразу
//а шаг выполняется после тела цикла. так что мы получим от 0 до 4

//fourth task
for (let i = 1; i <= 10; i++) {

  if (!(i % 2 == 0)) continue;

  alert(i);
}

//fifth task
{
  let i = 0;
  while (i < 3) {
    console.log(`number ${i}!`);
    i++;
  }
}

//sixth task
let userNumber = prompt("Введите Ваше число:", 0);

do {
  userNumber = prompt("Попробуйте снова, может быть что-то больше 100", 0);
} while (userNumber <= 100 && userNumber);

//seventh task
let n = 33;

isPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue isPrime;
  }

  alert(i);
}