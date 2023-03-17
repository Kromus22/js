const btn = document.querySelector('input');
const text = document.querySelector('div');

btn.addEventListener('click', () => {

  if (!text.hidden) {
    text.hidden = true;
  } else {
    text.hidden = false;
  }
});