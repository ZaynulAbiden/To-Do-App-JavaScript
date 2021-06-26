let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputfield = document.getElementById('inputfield');

addToDoButton.addEventListener('click', function() {
    var text = document.createElement('p');
    var delIcon = document.createElement("img");
    var cmpltIcon = document.createElement("img");
    delIcon.id = "delete-icon";
    cmpltIcon.id = "complete-icon";
    delIcon.src = "delete-btn.png";
    cmpltIcon.src = "complete-btn.png";
    var table = document.createElement("table");
    var row = document.createElement("tr");
    var col = [
        document.createElement("th"),
        document.createElement("td"),
        document.createElement("td")
    ];

    text.innerText = inputfield.value;
    col[0].appendChild(text);
    col[1].appendChild(cmpltIcon);
    col[2].appendChild(delIcon);
    row.appendChild(col[0]);
    row.appendChild(col[1]);
    row.appendChild(col[2]);
    table.appendChild(row);
    toDoContainer.appendChild(table);
    inputfield.value = "";

    cmpltIcon.addEventListener('click', function() {
        text.style.textDecoration = "line-through";
    })
    delIcon.addEventListener('click', function() {
        toDoContainer.removeChild(table);
    })
})