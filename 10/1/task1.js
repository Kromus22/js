try {
  // начать работу
  // работать
} catch (e) {
  // обработать ошибку
} finally {
  // очистить рабочее пространство
}


try {
  // начать работу
  // работать
} catch (e) {
  // обработать ошибку
}
// очистить рабочее пространство



/*Возможно в try попадётся необработанная ошибка, тогда код упадёт, до очистки рабочего пространстава.
В таком случае первый вариант более надёжный. Чтобы ни произошло внутри try catch, мы точно очистим 
рабочее пространство.*/


