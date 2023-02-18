//sixth task
let userNumber = prompt("Введите Ваше число:", 0);

do {
  userNumber = prompt("Попробуйте снова, может быть что-то больше 100", 0);
} while (userNumber <= 100 && userNumber);