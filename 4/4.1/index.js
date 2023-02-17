//first task
let user = {};
user.name = 'Jonh';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;


//second task
const isEmpty = (obj) => {
  for (let prop in obj) {
    return console.log('false');
  }
  return console.log('true');
}

isEmpty(user);

//third task
{
  const user = {
    name: "John"
  };

  // это будет работать?
  user.name = "Pete";
  //да, это будет работать. name станет - Pete.
}

//fourth task
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let prop in salaries) {
  sum += salaries[prop];
}

console.log(sum);

//fifth task
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = (obj) => {
  for (let prop in obj) {
    if (typeof obj[prop] == 'number') {
      obj[prop] *= 2;
    }
  }
}