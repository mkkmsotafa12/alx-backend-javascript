import * as crud from './crud';
import { RowElement, RowId } from './interface';

const row: RowElement = {
  firstName: 'Gulliaume',
  lastName: 'Salva'
};

const numRowID: RowId = crud.insertRow(row);

const updateRow: RowElement = {
  ...row,
  age: 23
};

crud.updateRow(numRowID, updateRow);
crud.deleteRow(numRowID);