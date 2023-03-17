const menuElem = document.querySelector('.menu');
const titleElem = menuElem.querySelector('.title');

titleElem.addEventListener('click', () => {
  menuElem.classList.toggle('open');
});