let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

/* функция sayHi существует внутри блока if.
а вызывается снаружи, где о ней ничего неизвестно.
будет ошибка, вероятно. */

