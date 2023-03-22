new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

//catch не выполнится, потому что проброс ошибки внутри setTimeout