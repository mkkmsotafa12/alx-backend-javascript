import { DeleteRow, InsertRow, UpdateRow } from './crud.d';

export const insertRow: InsertRow = (row) => {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
};

export const deleteRow: DeleteRow = (rowId) => {
  console.log('Delete row id', rowId);
  return;
};

export const updateRow: UpdateRow = (rowId, row) => {
  console.log(`Update row ${rowId}`, row);

  return rowId;
};