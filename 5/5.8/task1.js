//ну в этой задаче очевидно напрашивается скопировать
//к себе прочтённые сообщения через weakMap.
//тогда будет решена проблема автоудаления, а на счёт
//отображать прочитанными.. сложно сказать. проще всего добавить
//свойство к объекту с сообщением, что-то вроде isRead,
//которое переключалось бы при открытии сообщения пользователем
//через weakSet, соответсвтенно