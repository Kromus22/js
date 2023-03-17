grid.addEventListener('click', (evt) => {
  if (evt.target.tagName != 'TH') return;

  const th = evt.target;
  sortGrid(th.cellIndex, th.dataset.type);
});

const sortGrid = (colNum, type) => {
  const tbody = grid.querySelector('tbody');

  const rowsArray = Array.from(tbody.rows);

  let compare;

  switch (type) {
    case 'number':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case 'string':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
      };
      break;
  }

  rowsArray.sort(compare);

  tbody.append(...rowsArray);
}