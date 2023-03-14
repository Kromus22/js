const makeArmy = () => {

  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

//i находилось вне цикла, снаружи. поэтому менялось лишь по окончанию всего цикла,
//а не при каждой иттерации.