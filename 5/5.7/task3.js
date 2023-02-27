let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

//сделать keys массивом?
{
  let map = new Map();

  map.set("name", "John");
  let keys = [...map.keys()];
  keys.push("more");
  console.log(keys);
}