const ucFirst = (str) => {

  if (!str)
    return str;

  let first = str[0].toUpperCase();
  let another = str.slice(1);

  return (first + another);
}

console.log(ucFirst("вася"));