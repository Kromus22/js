//second task
alert(alert(1) || 2 || alert(3));
//отработает alert(1), но из-за того, что эта функция ничего не возвращает, то затем сработает alert(2).