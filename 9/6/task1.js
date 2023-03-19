function A() { }
function B() { }

A.prototype = B.prototype = {};

let a = new A();

alert(a instanceof B); // true

//так получилось из-за приравнивания прототипов, instanceof выполнил проверку,
//сверил прототипы, они оказались одинаковыми и поэтому он посчитал, что это один класс.