//first task
if ("0") {
  alert('Привет');
}
// алерт выведется

//second task
let jsName = prompt('Какое «официальное» название JavaScript?', '');

if (jsName == 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!');
}

//third task
let userNumber = prompt('Введите Ваше число', 0);

if (userNumber > 0) {
  alert(1);
} else if (userNumber < 0) {
  alert(-1);
} else {
  alert(0);
}

//fourth task
let result = (a + b < 4) ? 'Мало' : 'Много';

//fifth task
let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
      '';