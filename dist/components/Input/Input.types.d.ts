/// <reference types="react" />
export interface InputProps {
    /**
     * The label for the input field
     */
    label?: string;
    /**
     * Placeholder text for the input field
     */
    placeholder?: string;
    /**
     * Type of input, e.g., 'text', 'password', 'number'
     */
    type?: 'text' | 'password' | 'number';
    /**
     * The value of the input field
     */
    value?: string;
    /**
     * Callback when the input value changes
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Indicates if the input is disabled
     */
    disabled?: boolean;
    /**
     * Validation state for the input, e.g., 'success', 'error'
     */
    validationState?: 'success' | 'error';
    /**
     * Helper text displayed below the input
     */
    helperText?: string;
    /**
     * Indicates if the input is required
     */
    required?: boolean;
    /**
     * Icon to be displayed inside the input field
     */
    icon?: React.ReactNode;
    /**
     * Whether to show a password toggle button for password inputs
     */
    showPasswordToggle?: boolean;
    /**
     * Autofill value for the input
     */
    autoFill?: boolean;
    /**
     * Leading text before the input value
     */
    leadingText?: string;
    /**
     * Trailing text after the input value
     */
    trailingText?: string;
    /**
     * Size of the input, e.g., 'small', 'medium', 'large'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Inline label option for the input
     */
    inlineLabel?: boolean;
    /**
     * CSS class names for custom styling
     */
    className?: string;
}
