/// <reference path="./js/crud.d.ts" />
import { RowID, RowElement } from './js/interface';
import * as CRUD from './js/crud';

// Create a row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert the row and get the new row ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Update the row with an age field
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row: ${newRowID} {firstName: "Guillaume", lastName: "Salva", age: 23}`);

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`Deleted row ID: ${newRowID}`);
