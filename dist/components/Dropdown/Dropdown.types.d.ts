/// <reference types="react" />
export interface DropdownItem {
    /**
     * Text to display for the dropdown item
     */
    text: string;
    /**
     * Callback when the item is selected
     */
    onSelect: () => void;
    /**
     * Whether the item is disabled
     */
    disabled?: boolean;
    /**
     * Optional icon to display alongside the item
     */
    icon?: React.ReactNode;
    /**
     * Custom styles for the dropdown item
     */
    style?: React.CSSProperties;
}
export interface DropdownProps {
    /**
     * Label for the dropdown button
     */
    label: string;
    /**
     * The list of items to display in the dropdown
     */
    items: DropdownItem[];
    /**
     * The kind of dropdown button (default, neutral, success, danger)
     */
    kind?: 'default' | 'neutral' | 'success' | 'danger';
    /**
     * Size of the dropdown button ('small', 'medium', 'large')
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Whether the dropdown is disabled
     */
    disabled?: boolean;
    /**
     * Whether the dropdown is open
     */
    isOpen?: boolean;
    /**
     * Callback to handle dropdown open/close
     */
    onToggle: () => void;
    /**
     * Custom class names for the dropdown button
     */
    className?: string;
    /**
     * Optional icon to display on the dropdown button
     */
    buttonIcon?: React.ReactNode;
    /**
     * Whether the dropdown button is in an active state
     */
    isActive?: boolean;
    /**
     * Whether the dropdown should close when clicking outside
     */
    closeOnOutsideClick?: boolean;
    /**
     * Maximum height of the dropdown popover
     */
    maxHeight?: number;
    /**
     * Custom content for the dropdown footer
     */
    customFooter?: React.ReactNode;
    /**
     * Custom styles for the dropdown container
     */
    style?: React.CSSProperties;
    /**
     * Custom styles for the dropdown button
     */
    buttonStyle?: React.CSSProperties;
    /**
     * Custom styles for the dropdown content
     */
    contentStyle?: React.CSSProperties;
    /**
     * Custom styles for the dropdown footer
     */
    footerStyle?: React.CSSProperties;
}
