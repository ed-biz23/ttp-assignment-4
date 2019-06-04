// Helper for click and hold
let mouse = false;
// Initialize the table rows and columns
let rows = 1;
let columns = 4;

// Sets bgcolor of the individual cell
const setCellColor = cell => {
  let e = document.getElementById("color");
  let value = e.options[e.selectedIndex].value;
  switch (value) {
    case "red":
      cell.style.backgroundColor = "#FF0000";
      break;
    case "green":
      cell.style.backgroundColor = "#00FF00";
      break;
    case "blue":
      cell.style.backgroundColor = "#0000FF";
      break;
    case "yellow":
      cell.style.backgroundColor = "#FFFF00";
      break;
    case "orange":
      cell.style.backgroundColor = "#FFA500";
      break;
    case "purple":
      cell.style.backgroundColor = "#800080";
      break;
  }
};

// This function gets called when "Fill All Filled/Unfilled Cells clicked"
const setAllCellColor = () => {
  let cells = document.querySelectorAll("#table td");
  cells.forEach(cell => {
    if (cell.style.backgroundColor === "") {
      setCellColor(cell);
    } else if (cell.style.backgroundColor !== "") {
      setCellColor(cell);
    }
  });
};

// This function gets called when "Reset clicked"
const reset = () => {
  document.getElementById("table").remove();
  document.getElementById("color").selectedIndex = 0;
  rows = 1;
  columns = 4;
  createTable();
};

// This creates the initial table
const createTable = () => {
  let table = document.createElement("table");
  table.id = "table";
  table.onmousedown = e => {
    setCellColor(e.srcElement);
    mouse = true;
  };
  table.onmouseup = () => {
    mouse = false;
  };
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      let cell = document.createElement("td");
      cell.onmouseover = () => {
        if (mouse) {
          setCellColor(cell);
        }
      };
      cell.onclick = () => {
        setCellColor(cell);
      };
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  let div = document.getElementById("main-container");
  div.appendChild(table);
};

// This function gets called when "Add Row clicked" and it appends the row to the table
const addRow = () => {
  let table = document.getElementById("table");
  let tr = table.insertRow(rows); // TABLE ROW.

  for (let c = 0; c < columns; c++) {
    let cell = document.createElement("td"); // TABLE DEFINITION.
    cell = tr.insertCell(c);
    cell.onmouseover = () => {
      if (mouse) {
        setCellColor(cell);
      }
    };
    cell.onclick = () => {
      setCellColor(cell);
    };
  }
  rows++;
};

// This function gets called when "Delete Row clicked" and it delete the last row of the table
const DeleteRow = () => {
  if (rows === 1) {
    alert("At least need to have 1 or more row.");
  } else {
    let table = document.getElementById("table");
    rows--;
    table.deleteRow(rows);
  }
};

// This function gets called when "Add Column clicked" and it appends the column to the table
const addCol = () => {
  let table = document.getElementById("table");
  tableRows = table.getElementsByTagName("tr");

  for (let i = 0; i < tableRows.length; i++) {
    let cell = document.createElement("td");
    cell.onmouseover = () => {
      if (mouse) {
        setCellColor(cell);
      }
    };
    cell.onclick = () => {
      setCellColor(cell);
    };
    tableRows[i].appendChild(cell);
  }
  columns++;
};

// This function gets called when "Delete Column clicked" and it delete the last column
const deleteCol = () => {
  if (columns === 1) {
    alert("At least need to have 1 or more column.");
  } else {
    let table = document.getElementById("table");
    tableRows = table.getElementsByTagName("tr");
    columns--;
    for (let i = 0; i < tableRows.length; i++) {
      tableRows[i].deleteCell(columns);
    }
  }
};
