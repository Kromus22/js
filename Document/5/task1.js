for (let li of document.querySelectorAll('li')) {
  let title = li.firstChild.data;
  console.log(title);
}

const li = document.getElementsByTagName('li').length;
console.log(li);