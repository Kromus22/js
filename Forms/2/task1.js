let area = null;
const view = document.getElementById('view');

function editStart() {
  area = document.createElement('textarea');
  area.className = 'edit';
  area.value = view.innerHTML;

  area.onkeydown = function (event) {
    if (event.key == 'Enter') {
      this.blur();
    }
  };

  area.onblur = function () {
    editEnd();
  };

  view.replaceWith(area);
  area.focus();
}

function editEnd() {
  view.innerHTML = area.value;
  area.replaceWith(view);
}

view.addEventListener('click', () => {
  editStart();
});