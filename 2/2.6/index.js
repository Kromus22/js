const nameBlock = document.querySelector('span');
let yourName = prompt('Введите ваше имя:', '');

nameBlock.textContent = yourName;

alert(`Ваше имя ${yourName}`);