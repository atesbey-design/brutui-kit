export interface CheckboxProps {
    /**
     * The label for the checkbox
     */
    label: string;
    /**
     * Whether the checkbox is checked
     */
    checked?: boolean;
    /**
     * Whether the checkbox is in an indeterminate state
     */
    indeterminate?: boolean;
    /**
     * Callback when the checkbox state changes
     */
    onChange: (checked: boolean) => void;
    /**
     * Whether the checkbox is disabled
     */
    disabled?: boolean;
    /**
     * Whether the checkbox is required
     */
    required?: boolean;
    /**
     * CSS class names for custom styling
     */
    className?: string;
}
export type CheckboxState = 'unchecked' | 'checked' | 'indeterminate';
