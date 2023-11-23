function createTable(n, m) {
    let table = document.createElement('table');

    for (let i = 0; i < n; i++) {
        let row = table.insertRow();
        for (let j = 0; j < m; j++) {
            let cell = row.insertCell();
            cell.textContent = `Ячейка ${i + 1}-${j + 1}`;
        }
    }

    return table;
}




let generatedTable = createTable(2, 5);
document.body.appendChild(generatedTable);