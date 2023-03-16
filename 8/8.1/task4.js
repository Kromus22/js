let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};


//наедаются оба потому что желудок у них общий в изначалньом хомяке от которого они наследуют.
//надо каждому из них дать собственный желудок.