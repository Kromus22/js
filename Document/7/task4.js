const ul = document.createElement('ul');
const wrapper = document.querySelector('.task');
wrapper.append(ul);

while (true) {
  const data = prompt("Введите текст для элемента списка", "");

  if (!data) {
    break;
  }

  const li = document.createElement('li');
  li.textContent = data;
  ul.append(li);
}