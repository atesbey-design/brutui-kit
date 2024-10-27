/// <reference types="react" />
export interface DataTableProps {
    /**
     * Data to be displayed in the table
     */
    data: Array<Record<string, any>>;
    /**
     * Columns configuration for the table
     */
    columns: Array<{
        header: string;
        accessor: string;
        sortable?: boolean;
        width?: string;
        cellRenderer?: (data: any) => React.ReactNode;
        /**
         * Custom styles for the column cells
         */
        cellStyle?: React.CSSProperties;
        /**
         * Custom class name for the column cells
         */
        cellClassName?: string;
    }>;
    /**
     * Callback when a row is selected
     */
    onRowSelect?: (selectedRows: Array<any>) => void;
    /**
     * Whether the table rows are selectable
     */
    selectable?: boolean;
    /**
     * Number of rows to display per page
     */
    rowsPerPage?: number;
    /**
     * Custom class names for the table
     */
    className?: string;
    /**
     * Callback for sorting columns
     */
    onSort?: (column: string, direction: 'asc' | 'desc') => void;
}
export interface DataTableRowProps {
    /**
     * Data for the specific row
     */
    rowData: Record<string, any>;
    /**
     * Columns configuration for the row
     */
    columns: DataTableProps['columns'];
    /**
     * Whether the row is selectable
     */
    selectable?: boolean;
    /**
     * Callback when the row is selected
     */
    onSelect?: (selected: boolean) => void;
    /**
     * Custom styles for the row
     */
    rowStyle?: React.CSSProperties;
    /**
     * Custom class name for the row
     */
    rowClassName?: string;
    /**
     * Whether the row is currently selected
     */
    selected?: boolean;
}
export type SortDirection = 'asc' | 'desc';
