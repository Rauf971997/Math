
  const addRowBtn = document.querySelector("#addRowBtn");
  const addColumnBtn = document.querySelector("#addColumnBtn");
  const deleteRowBtn = document.querySelector("#deleteRowBtn");
  const deleteColumnBtn = document.querySelector("#deleteColumnBtn");
  const myTable = document.querySelector("#myTable");

  addRowBtn.addEventListener("click", function () {
    const row = myTable.insertRow(-1);
    const cell = row.insertCell(0);
    cell.innerHTML = "Новая ячейка";
  });

  addColumnBtn.addEventListener("click", function () {
    for (let i = 0; i < myTable.rows.length; i++) {
      const cell = myTable.rows[i].insertCell(-1);
      cell.innerHTML = "Новая ячейка";
    }
  });

  deleteRowBtn.addEventListener("click", function () {
    const lastRowIndex = myTable.rows.length - 1;
    if (lastRowIndex >= 1) {
      myTable.deleteRow(lastRowIndex);
    } else {
      alert("Нельзя удалить последнюю строку!");
    }
  });

  deleteColumnBtn.addEventListener("click", function () {
    const lastCellIndex = myTable.rows[0].cells.length - 1;
    if (lastCellIndex >= 1) {
      for (let i = 0; i < myTable.rows.length; i++) {
        myTable.rows[i].deleteCell(lastCellIndex);
      }
    } else {
      alert("Нельзя удалить последний столбец!");
    }
  });