import styled from 'styled-components';
import { SortDirection } from './Datatable.types';
import { colorPalette } from '../../color.type';

export const TableContainer = styled.div`
  border: 1px solid ${colorPalette.gray[3]};
  border-radius: 8px;
  padding: 16px;
  background: #ffffff;
  font-family: system-ui, -apple-system, sans-serif;
  box-shadow: 0 1px 3px ${colorPalette.black[4]};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background: ${colorPalette.gray[4]};
  border-bottom: 1px solid ${colorPalette.gray[3]};
`;

export const TableHeaderCell = styled.th<{
  sortable?: boolean;
  sortDirection?: SortDirection;
  width?: string;
}>`
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: ${colorPalette.gray[1]};
  font-size: 14px;
  width: ${props => props.width || 'auto'};
  
  ${props => props.sortable && `
    cursor: pointer;
    user-select: none;
    
    &:hover {
      background: ${colorPalette.gray[3]};
    }
    
    &:after {
      content: '${props.sortDirection === 'asc' ? '↑' : props.sortDirection === 'desc' ? '↓' : ''}';
      margin-left: 8px;
      opacity: 0.5;
    }
  `}
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background: ${colorPalette.gray[4]};
  }
`;

export const TableRow = styled.tr<{
  selectable?: boolean;
  selected?: boolean;
}>`
  border-bottom: 1px solid ${colorPalette.gray[3]};
  transition: background-color 0.2s;

  ${props => props.selectable && `
    cursor: pointer;
    
    &:hover {
      background: ${colorPalette.gray[3]};
    }
  `}

  ${props => props.selected && `
    background: ${colorPalette.blue[4]} !important;
  `}
`;

export const TableCell = styled.td`
  padding: 12px 16px;
  font-size: 14px;
  color: ${colorPalette.black[1]};
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding: 8px 0;
`;

export const PageButton = styled.button<{
  active?: boolean;
}>`
  padding: 6px 12px;
  border: 1px solid ${props => props.active ? colorPalette.blue[0] : colorPalette.gray[3]};
  border-radius: 4px;
  background: ${props => props.active ? colorPalette.blue[0] : '#ffffff'};
  color: ${props => props.active ? '#ffffff' : colorPalette.gray[1]};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${props => props.active ? colorPalette.blue[1] : colorPalette.gray[4]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
