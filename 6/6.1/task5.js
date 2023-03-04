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

const printReverseList = (list) => {

  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}

printReverseList(list);


{
  const printReverseList = (list) => {
    let arr = [];
    let temp = list;

    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i]);
    }
  }

  printReverseList(list);
}