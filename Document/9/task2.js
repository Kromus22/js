const elem = document.createElement('div');

elem.style.overflowY = 'scroll';
elem.style.width = '50px';
elem.style.height = '50px';

document.body.append(elem);
const scrollWidth = elem.offsetWidth - elem.clientWidth;
elem.remove();

console.log(scrollWidth);