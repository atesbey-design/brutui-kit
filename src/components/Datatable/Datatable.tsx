import React, { useState } from 'react';
import { DataTableProps, DataTableRowProps, SortDirection } from './Datatable.types';
import {
  TableContainer,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCell,
  TableRow,
  TableBody
} from './Datatable.styles';
import Checkbox from '../Checkbox/Checkbox';

const DataTableRow: React.FC<DataTableRowProps> = ({
  rowData,
  columns,
  selectable,
  onSelect,
  rowStyle,
  rowClassName,
  selected
}) => {
  return (
    <TableRow style={rowStyle} className={rowClassName} selectable={selectable} selected={selected}>
      {selectable && (
        <TableCell>
          <Checkbox
            label="Select"
            onChange={(checked) => onSelect?.(checked)}
            checked={selected}
          />
        </TableCell>
      )}
      {columns.map((column) => (
        <TableCell 
          key={column.accessor}
          style={column.cellStyle}
          className={column.cellClassName}
        >
          {column.cellRenderer 
            ? column.cellRenderer(rowData[column.accessor])
            : rowData[column.accessor]}
        </TableCell>
      ))}
    </TableRow>
  );
};

export const DataTable: React.FC<DataTableProps> = ({
  data,
  columns,
  onRowSelect,
  selectable = false,
  rowsPerPage = 10,
  className,
  onSort
}) => {
  const [selectedRows, setSelectedRows] = useState<Array<any>>([]);
  const [sortColumn, setSortColumn] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (column: string) => {
    const newDirection = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(newDirection);
    onSort?.(column, newDirection);
  };

  const handleRowSelect = (row: any, selected: boolean) => {
    const updatedSelection = selected
      ? [...selectedRows, row]
      : selectedRows.filter(r => r !== row);
    
    setSelectedRows(updatedSelection);
    onRowSelect?.(updatedSelection);
  };

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <TableContainer className={className}>
      <Table>
        <TableHeader>
          <tr>
            {selectable && (
              <TableHeaderCell>
                <Checkbox
                  label="Select"
                  onChange={(checked) => {
                    const newSelection = checked ? [...data] : [];
                    setSelectedRows(newSelection);
                    onRowSelect?.(newSelection);
                  }}
                  indeterminate={selectedRows.length > 0 && selectedRows.length < data.length}
                  checked={selectedRows.length === data.length}
                />
              </TableHeaderCell>
            )}
            {columns.map((column) => (
              <TableHeaderCell
                key={column.accessor}
                sortable={column.sortable}
                sortDirection={sortColumn === column.accessor ? sortDirection : undefined}
                width={column.width}
                onClick={() => column.sortable && handleSort(column.accessor)}
              >
                {column.header}
              </TableHeaderCell>
            ))}
          </tr>
        </TableHeader>
        <TableBody>
          {currentData.map((row, index) => (
            <DataTableRow
              key={index}
              rowData={row}
              columns={columns}
              selectable={selectable}
              onSelect={(selected) => handleRowSelect(row, selected)}
              selected={selectedRows.includes(row)}
              rowStyle={undefined}
              rowClassName={undefined}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
