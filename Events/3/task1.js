container.addEventListener('click', (evt) => {
  if (evt.target.className != 'remove-button') return;

  let pane = evt.target.closest('.pane');
  pane.remove();
});