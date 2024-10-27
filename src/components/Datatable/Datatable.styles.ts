import styled from 'styled-components';
import { SortDirection } from './Datatable.types';

export const TableContainer = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  background: #ffffff;
  font-family: system-ui, -apple-system, sans-serif;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
`;

export const TableHeaderCell = styled.th<{
  sortable?: boolean;
  sortDirection?: SortDirection;
  width?: string;
}>`
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: #475569;
  font-size: 14px;
  width: ${props => props.width || 'auto'};
  
  ${props => props.sortable && `
    cursor: pointer;
    user-select: none;
    
    &:hover {
      background: #f1f5f9;
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
    background: #f8fafc;
  }
`;

export const TableRow = styled.tr<{
  selectable?: boolean;
  selected?: boolean;
}>`
  border-bottom: 1px solid #e2e8f0;
  transition: background-color 0.2s;

  ${props => props.selectable && `
    cursor: pointer;
    
    &:hover {
      background: #f1f5f9;
    }
  `}

  ${props => props.selected && `
    background: #e0f2fe !important;
  `}
`;

export const TableCell = styled.td`
  padding: 12px 16px;
  font-size: 14px;
  color: #334155;
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
  border: 1px solid ${props => props.active ? '#3b82f6' : '#e2e8f0'};
  border-radius: 4px;
  background: ${props => props.active ? '#3b82f6' : '#ffffff'};
  color: ${props => props.active ? '#ffffff' : '#64748b'};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${props => props.active ? '#2563eb' : '#f8fafc'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
