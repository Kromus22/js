//first task 
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}

//обе функции отработают одинаково потому что если мы не упадём в if,
//то просто выполнится код дальше в обоих случаях.

//second task
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

//third task
function min(a, b) {
  return (a > b) ? b : a;
}

