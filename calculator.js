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
        newRow = table.tBodies[0].insertRow();
        tag = "td";
    }

    //Add values into new rows
    for (const value of inputValues) {
        let cell = document.createElement(tag);
        cell.innerText = value;
        newRow.appendChild(cell);
    }
}

//Variables for calculations
let results = [];
let xNumbers = [];
let yNumbers = [];
let operators = [];
let total = 0;
let totalResults = 0;
let maxNumber = Number.MIN_VALUE;
let minNumber = Number.MAX_VALUE;

let continueFlag = true;

while (continueFlag) {
    //Get X Value and append to array
    let xString = prompt("Value of X: ");
    let x = parseFloat(xString);
    xNumbers.push(x)

    //Get operator and append to array
    let operString = prompt("Operator: ");
    operators.push(operString);

    //Get Y Value and append to array
    let yString = prompt("Value of Y: ");
    let y = parseFloat(yString);
    yNumbers.push(y)

    let result;

    //validate operators and compute result
    if (isNaN(x) || isNaN(y)) {
        result = "Invalid Number"
    } else {
        if (operString == '+') {
            result = x + y;
        } else if (operString == "-") {
            result = x - y;
        } else if (operString == "%") {
            result = x % y;1;
        } else if (operString == "*") {
            result = x * y;
        } else if (operString == "/") {
            if (y == 0) {
                result = "Undefined";
            } else {
                result = x / y;
            }
        } else {
            result = "Invalid Operator";
        }
    }

    //Check if result is a number and add total, compute min/max
    if (!isNaN(result)) {
        total += result;
        totalResults += 1;

        if (result > maxNumber) {
            maxNumber = result
        }

        if (result < minNumber) {
            minNumber = result
        }

        result = Number(result.toFixed(4));
    }

    //Append results to array
    results.push(result);
    
    //Check if wanting to continue
    continueFlag = confirm("Continue?: ");    
}

//Make results table and insert table with header into HTML
let resultsTable = document.createElement('table');
resultsTable.setAttribute('id', 'resultsTable');
document.body.appendChild(resultsTable);
makeRow(resultsTable, ['X', 'OP', 'Y', 'Result'], true);

//Insert values into results table
for (let i = 0; i < results.length; i++) {
    makeRow(resultsTable, [xNumbers[i], operators[i], yNumbers[i], results[i]], false);
    //Color the 2nd column of the latest row
    resultsTable.rows[resultsTable.rows.length - 1].cells[1].style.backgroundColor = "#ffdead";
}

//Make calculations table and insert table with header into HTML
let calcTable = document.createElement('table');
calcTable.setAttribute('id', 'calcTable');
document.body.appendChild(calcTable);
makeRow(calcTable, ['Min', 'Max', 'Average', 'Total'], true);

//Add min, max, average, and total to table
let average;
if (totalResults > 0) {
    average = total / totalResults;
} else {
    average = 0
}
if (minNumber == Number.MAX_VALUE) {
    minNumber = 0
}
if (maxNumber == Number.MIN_VALUE) {
    maxNumber = 0
}
makeRow(calcTable, [Number(minNumber.toFixed(4)), Number(maxNumber.toFixed(4)), Number(average.toFixed(4)), Number(total.toFixed(4))], false);

//Main page link
let link = document.createElement('a');
link.setAttribute('href', 'index.html');
link.innerHTML = "Main Page";
document.body.appendChild(link);