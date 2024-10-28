/// <reference types="react" />
export interface PopoverProps {
    /**
     * The text to display in the trigger button
     */
    triggerText: string;
    /**
     * The title text shown in the popover header
     */
    title: string;
    /**
     * The main content text of the popover
     */
    content: string;
    /**
     * Visual variant of the popover
     * - Changes the background color, text color and border color
     * - Available options: 'default', 'red', 'blue', 'yellow', 'green', 'purple'
     */
    variant?: PopoverVariant;
    /**
     * The content to be displayed inside the popover, which can include text, images, or other components
     */
    /**
     * Determines whether the popover is currently visible
     */
    isOpen: boolean;
    /**
     * The element that triggers the popover when clicked or focused
     * - Can be a button, icon, or any other interactive element
     */
    triggerElement: React.ReactNode;
    /**
     * Position of the popover relative to the trigger element
     * - Defines where the popover will appear (e.g., 'top', 'bottom', 'left', 'right', 'center', 'auto')
     * - 'auto' allows the popover to determine the best position based on available space
     */
    position?: PopoverPosition;
    /**
     * Alignment of the popover content relative to the trigger element
     * - Examples: 'start', 'center', 'end'
     * - Useful for fine-tuning the position of the popover
     */
    alignment?: PopoverAlignment;
    /**
     * Callback function that triggers when the popover is opened
     */
    onOpen?: () => void;
    /**
     * Callback function that triggers when the popover is closed
     */
    onClose?: () => void;
    /**
     * Whether the popover should close when clicking outside its content
     * - Default is `true` to provide a natural dismissal behavior
     */
    closeOnOutsideClick?: boolean;
    /**
     * Custom class names for additional styling or integration with CSS frameworks
     */
    className?: string;
    /**
     * Determines if the popover should adjust automatically to fit within the viewport
     * - If `true`, the popover will reposition itself to prevent overflow
     */
    autoAdjust?: boolean;
    /**
     * Accessibility settings for the popover, ensuring compliance with WCAG guidelines
     */
    accessibility?: PopoverAccessibility;
    /**
     * Whether the popover includes an arrow pointing to the trigger element
     * - Helps visually indicate the relationship between the popover and the trigger
     */
    hasArrow?: boolean;
    /**
     * Delay before the popover appears or disappears (in milliseconds)
     * - Useful for adding smooth transitions
     */
    delay?: number;
    /**
     * Width of the popover, allowing customization of its size (e.g., '300px', '50%', 'auto')
     */
    width?: string;
    /**
     * Height of the popover, allowing customization of its size (e.g., '200px', 'auto')
     */
    height?: string;
    /**
     * Whether the popover is dismissible by pressing the 'Escape' key
     * - Default is `true` to ensure easy dismissal for keyboard users
     */
    dismissibleByEscape?: boolean;
    /**
     * Animation type for popover appearance and dismissal
     * - Examples: 'fade', 'slide', 'zoom', 'none'
     */
    animationType?: 'fade' | 'slide' | 'zoom' | 'none';
    /**
     * Whether the popover should remain in view while scrolling
     * - Useful for popovers that contain important information or actions
     */
    sticky?: boolean;
    /**
     * Maximum height of the popover, after which a scrollbar will appear
     * - Ensures that content does not overflow excessively on smaller screens
     */
    maxHeight?: string;
    /**
     * Whether the popover should support multiple trigger interactions (e.g., hover, click)
     * - Examples: 'click', 'hover', 'focus'
     */
    triggerInteraction?: PopoverTriggerInteraction;
    /**
     * The offset distance between the popover and the trigger element, in pixels
     * - Helps adjust spacing to improve visual alignment
     */
    offset?: number;
    /**
     * Z-index value to manage the layering of the popover in complex layouts
     */
    zIndex?: number;
    /**
     * Whether the popover can be nested within another popover or modal
     * - Useful for creating complex UI elements without overlap issues
     */
    isNested?: boolean;
    /**
     * Background color of the popover
     */
    bgColor?: string;
    /**
     * Text color of the popover content
     */
    textColor?: string;
    /**
     * Border color of the popover
     */
    borderColor?: string;
}
export type PopoverPosition = 'top' | 'bottom' | 'left' | 'right' | 'center' | 'auto';
export type PopoverAlignment = 'start' | 'center' | 'end';
export type PopoverTriggerInteraction = 'click' | 'hover' | 'focus';
export type PopoverVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export interface PopoverAccessibility {
    /**
     * Describes the popover for screen readers, providing context for visually impaired users
     */
    ariaLabel?: string;
    /**
     * Indicates the relationship between the popover and the trigger element
     * - Useful for defining `aria-labelledby` or `aria-describedby`
     */
    ariaDescribedBy?: string;
    /**
     * Determines the level of importance for screen reader announcements
     * - 'polite' for non-urgent messages, 'assertive' for immediate messages
     */
    ariaLive?: 'polite' | 'assertive';
}
