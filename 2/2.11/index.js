//first task
alert(null || 2 || undefined); //2

//second task
alert(alert(1) || 2 || alert(3));
//отработает alert(1), но из-за того, что эта функция ничего не возвращает, то затем сработает alert(2).

//third task
alert(1 && null && 2); //null

//fourth task
alert(alert(1) && alert(2)); //alert(1)

//fifth task
alert(null || 2 && 3 || 4); //3

//sixth task
let age = 18;

if (age >= 14 && age <= 90) {
  alert('true');
} else {
  alert('false');
}

//seventh task
if (!(age >= 14 && age <= 90)) {
  alert('true');
} else {
  alert('false');
}

if (age < 14 || age > 90) {
  alert('true');
} else {
  alert('false');
}

//eighth task 
if (-1 || 0) alert('first'); //выполнится. в условии будет true или false
if (-1 && 0) alert('second'); //не выполнится. в условии будет true и false
if (null || -1 && 1) alert('third'); //выполнится. в условии будет false или true

//ninth task
let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let userPassword = prompt('Пароль?', '');

  if (userPassword === 'Я главный') {
    alert('Здравствуйте!');
  } else if (userPassword === '' || userPassword === null) {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }

} else if (userName === '' || userName === null) {
  alert('Отменено');
} else {
  alert("Я вас не знаю");
}