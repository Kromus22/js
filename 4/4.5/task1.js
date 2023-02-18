//first task
function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert(a == b); // true

//если результатом выполнения обеих функций будет ссылка
//на один и тот же объект, то будет равенство.
