let user = {
  name: "Василий Иванович",
  age: 35
};

let jsonUser = JSON.stringify(user);

let newUser = JSON.parse(jsonUser);