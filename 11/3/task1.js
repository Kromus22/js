promise.then(f1).catch(f2);

promise.then(f1, f2);

//они отработают по разному. во втором варианте не предусмотрен вариант обработки ошибки.