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