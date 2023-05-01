
function mattObj(myObj) {
    let tableObj = document.createElement("table");

    //Add a header
    
    let header = document.createElement("tr");
    let idHeaderCell = document.createElement("th");
    let nameHeaderCell = document.createElement("th");
    let relevanceHeaderCell = document.createElement("th");
    header.appendChild(idHeaderCell);
    header.appendChild(nameHeaderCell);
    header.appendChild(relevanceHeaderCell);
    table.appendChild(header);

    //Add the rest of the data to the table

    for (let i = 0; i < myObj.length; i++) {
    let id = (i + 1);
    let name = data[i].key;
    let relevance = data[i].value;
    let tr = document.createElement("tr");
    let idCell = document.createElement("td");
    let nameCell = document.createElement("td");
    let relevanceCell = document.createElement("td");

    idCell.appendChild(document.createTextNode(id));
    nameCell.appendChild(document.createTextNode(name));
    relevanceCell.appendChild(document.createTextNode(relevance));

    tr.appendChild(idCell);
    tr.appendChild(nameCell);
    tr.appendChild(relevanceCell);

    table.appendChild(tr);
}