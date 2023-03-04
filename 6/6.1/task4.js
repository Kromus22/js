let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

const printList = (list) => {
  let temp = list;

  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }

}

printList(list);


{
  const printList = (list) => {

    console.log(list.value);

    if (list.next) {
      printList(list.next);
    }

  }

  printList(list);
}

//опять эе, выриант с циклом должен быть менее ресурсозатратным
//из-за того, что там нет повторных вызовов функции.