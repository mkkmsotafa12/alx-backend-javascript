import { RowElement, RowId } from './interface';

export interface InsertRow {
  (row: RowElement): RowId;
}

export interface DeleteRow {
  (rowId: RowId): void;
}

export interface UpdateRow {
  (rowId: RowId, row: RowElement): RowId;
}