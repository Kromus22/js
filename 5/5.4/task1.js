let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length); // ?

//4. Банан добавится в конец массива.
//мы изменяем один и тот же массив, на который ссылаются 2 переменных.