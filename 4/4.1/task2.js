//second task
const isEmpty = (obj) => {
  for (let prop in obj) {
    return console.log('false');
  }
  return console.log('true');
}

isEmpty(user);