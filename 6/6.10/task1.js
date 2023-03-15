function f() {
  alert(this); // ?
}

let user = {
  g: f.bind(null)
};

user.g();

// будет null. мы же, буквально, привязались к пустоте вроде.