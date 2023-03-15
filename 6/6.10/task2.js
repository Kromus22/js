function f() {
  alert(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f();

//Вася? bind привязывается один раз только.