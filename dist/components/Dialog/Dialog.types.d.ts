/// <reference types="react" />
export interface DialogAction {
    /**
     * Text to display on the action button
     */
    text: string;
    /**
     * Callback to handle button click
     */
    onClick: () => void;
    /**
     * Whether the button is disabled
     */
    disabled?: boolean;
    /**
     * Optional icon to display on the button
     */
    icon?: React.ReactNode;
}
export interface DialogProps {
    /**
     * Title of the dialog
     */
    title: string;
    /**
     * Content of the dialog
     */
    content: React.ReactNode;
    /**
     * Whether the dialog is open
     */
    isOpen: boolean;
    /**
     * Callback to close the dialog
     */
    onClose: () => void;
    /**
     * Primary action button
     */
    primaryAction?: DialogAction;
    /**
     * Secondary action button
     */
    secondaryAction?: DialogAction;
    /**
     * Tertiary action button
     */
    tertiaryAction?: DialogAction;
    /**
     * Size of the dialog ('small', 'medium', 'large')
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Whether the dialog should have an overlay
     */
    overlay?: boolean;
    /**
     * Custom class names for the dialog
     */
    className?: string;
    /**
     * Whether the dialog is critical (e.g., for destructive actions)
     */
    isCritical?: boolean;
    /**
     * Image to be displayed in the dialog
     */
    image?: string;
    /**
     * Callback when the dialog is opened
     */
    onOpen?: () => void;
    /**
     * Whether to close the dialog when clicking outside the content
     */
    closeOnOverlayClick?: boolean;
    /**
     * Custom footer content for the dialog
     */
    customFooter?: React.ReactNode;
    /**
     * Custom header content for the dialog (e.g., additional buttons)
     */
    customHeader?: React.ReactNode;
    /**
     * Whether the dialog is draggable
     */
    draggable?: boolean;
    /**
     * Minimum width of the dialog when resizing (if draggable)
     */
    minWidth?: number;
    /**
     * Minimum height of the dialog when resizing (if draggable)
     */
    minHeight?: number;
    /**
     * Custom styles for the dialog container
     */
    style?: React.CSSProperties;
    /**
     * Custom styles for the overlay
     */
    overlayStyle?: React.CSSProperties;
    /**
     * Custom styles for the header
     */
    headerStyle?: React.CSSProperties;
    /**
     * Custom styles for the content
     */
    contentStyle?: React.CSSProperties;
    /**
     * Custom styles for the footer
     */
    footerStyle?: React.CSSProperties;
}
