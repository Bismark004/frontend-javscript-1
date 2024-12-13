import RowID from "./interface";
import RowElement from "./interface";


// Declare types for CRUD functions
declare module CRUD {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
}