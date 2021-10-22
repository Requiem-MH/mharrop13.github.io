//Makes a new row on a given table using the given values
function makeRow(table, inputValues, header = false ) {
    //Check if table has header and body
    if (table.tHead == null) {
        table.createTHead();
    }
    if (table.tBodies.length === 0) {
        table.createTBody();
    }

    //create a row in header or body
    let newRow;
    let tag;
    if (header) {
        newRow = table.tHead.insertRow();
        tag = "th";
    } else {
        row = table.tBodies[0].insertRow();
        tag = "tb";
    }

    //Add values into new rows
    for (let value of inputValues) {
        let cell = document.createElement(tag);
        cell.innerText = value;
        newRow.appendChild(cell);
    }
}

//Main page link
let link = document.createElement('a');
link.setAttribute('href', 'index.html');
link.textContent = "Main Page";
document.body.appendChild(link);

//Variables for calculations
let results = [];
let xNumbers = [];
let yNumbers = [];
let operators = [];
let results = [];
let total;
let min = 0;
let max = 0;

let continueFlag = true;

while (continueFlag) {
    //Get X Value and append to array
    let xString = prompt("Value of X: ");
    let x = Number.parseFloat(xString).toFixed(2);
    xNumbers.push(x);

    //Get operator and append to array
    let operString = prompt("Operator: ");
    operators.push(operString);

    //Get Y Value and append to array
    let yString = prompt("Value of Y: ");
    let y = Number.parseFloat(yString).toFixed;
    yNumbers.push(y);

    let result;

    //validate operators and compute result
    if (isNaN(x) || isNaN(y)) {
        result = "Invalid Number Value"
    } else {
        if (operString == "+") {
            result = x + y;
        } else if (operString == "-") {
            result = x - y;
        } else if (operString == "%") {
            result = x % y;
        } else if (operString == "*") {
            result = x * y;
        } else if (operString == "/") {
            if (y == 0) {
                result = "Undefined: Divided by 0";
            } else {
                result = x / y;
            }
        } else {
            result = "Invalid Operator";
        }
    }

    //Append results to array
    result = Number.parseFloat(result).toFixed(2);
    results.push(result);
    total += result;
    continueFlag = confirm("Continue?: ");    
}

//Make results table and insert table with header into HTML
let resultsTable = document.createElement('table');
resultsTable.setAttribute('id', 'resultsTable');
document.body.appendChild(resultsTable);
makeRow(resultsTable, ['X', 'OP', 'Y', 'Result'], true);

//Insert values into results table
for (let i = 0; i < results.length; i++) {
    makeRow(resultsTable, xNumbers[i], operators[i], yNumbers[i], results[i], true);
    //Color the 2nd column of the latest row
    resultsTable.rows[resultsTable.rows.length - 1].cells[1].style.backgroundColor = "lightsalmon";
}

//Make calculations table and insert table with header into HTML
let resultsTable = document.createElement('table');
resultsTable.setAttribute('id', 'calcTable');
document.body.appendChild(calcTable);
makeRow(resultsTable, ['Min', 'Max', 'Average', 'Total'], true);


if (results.length > 0) {
    //Compute average, min and max
    let average = total / results.length
    let min = Math.min(...results)
    let max = Math.max(...results)

    makeRow(calcTable, [min, max, average, total])
}