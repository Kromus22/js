//first task
{
  let a = 1, b = 1;
  // a и b равны 2, ну после выполнения операций с ними ниже ) 
  let c = ++a; // 2
  let d = b++; // 1
}

//second task
{
  let a = 2;

  let x = 1 + (a *= 2);
  // a=4, x=5
}

//third task
{
  "" + 1 + 0    //10
  "" - 1 + 0    //-1
  true + false  //1
  6 / "3"       //2
  "2" * "3"     //6  
  4 + 5 + "px"  //9px
  "$" + 4 + 5   //$45
  "4" - 2       //2
  "4px" - 2     //Not a Number
  "  -9  " + 5  // -9 5
  "  -9  " - 5  //-14
  null + 1      //1
  undefined + 1 //NaN
  " \t \n" - 2  //-2
}

//fourth task
{
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);

  alert(+a + +b);
}

//ну или можно + сразу перед промптом поставить, в объявлении переменных
{
  let a = +prompt("Первое число?", 1);
  let b = +prompt("Второе число?", 2);

  alert(a + b);
}