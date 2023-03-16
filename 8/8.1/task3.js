let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

//full получит кролик, потому что this привязывается к вызываемому объекту.