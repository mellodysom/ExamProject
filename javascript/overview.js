


const electives = [
    {name: "Elective 1", yourRating1: 2, yourRating2: 3, avgRating1: 3, avgRating:2 ,overallrating: 2},
    {name: "Elective 2", yourRating1: 2, yourRating2: 3, avgRating1: 3, avgRating:2, overallrating: 2}
  ];
  
  function buildTable(data) {
    let table = document.createElement("table");
  
    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    fields.forEach(function(field) {
      let headCell = document.createElement("th");
      headCell.textContent = field;
      headRow.appendChild(headCell);
    });
    table.appendChild(headRow);
  
    data.forEach(function(object) {
      let row = document.createElement("tr");
      fields.forEach(function(field) {
        let cell = document.createElement("td");
        cell.textContent = object[field];
        if (typeof object[field] == "number") {
          cell.style.textAlign = "right";
        }
        row.appendChild(cell);
      });
      table.appendChild(row);
    });
  
    return table;
  }
  
  document.querySelector("#electives")
    .appendChild(buildTable(electives));