export interface NotificationProps {
  /**
   * The title or caption of the notification, providing context for the user
   */
  title: string;

  /**
   * The main message or content of the notification
   */
  message: string;

  /**
   * Type of notification to indicate its purpose or importance
   */
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info' | 'custom';

  /**
   * Whether the notification includes an icon to provide visual emphasis
   * - Icons can be used to quickly convey the type or importance of the notification
   */
  icon?: React.ReactNode;

  /**
   * Whether to show a close button in the notification
   * - If true, displays a close button that triggers onDismiss when clicked
   */
  showCloseButton?: boolean;

  /**
   * Custom icon for the close button
   * - Allows overriding the default close icon with a custom one
   */
  closeIcon?: React.ReactNode;

  /**
   * Determines if the notification is temporary (default) or permanent
   * - If `true`, the notification will automatically disappear after the specified duration
   * - If `false`, the notification remains visible until dismissed by the user
   */
  isTemporary?: boolean;

  /**
   * Duration for which the notification is visible (in seconds), applicable if `isTemporary` is true
   * - Default recommendation is between 5 to 12 seconds for optimal user experience
   */
  duration?: number;

  /**
   * Callback function triggered when the notification is dismissed by the user
   * - Useful for tracking user actions or updating state when the notification is closed
   */
  onDismiss?: () => void;

  /**
   * Callback function for handling custom actions within the notification (e.g., button click)
   * - The `action` parameter can be used to identify which action was triggered
   */
  onAction?: (action: string) => void;

  /**
   * List of action buttons displayed at the bottom of the notification, allowing users to take specific actions
   */
  actions?: Array<NotificationAction>;

  /**
   * Position of the notification on the screen
   * - Defines where the notification will appear (e.g., 'bottom-left', 'top-right')
   */
  position?: NotificationPosition;

  /**
   * Whether the notification should include a countdown indicator to show remaining time before dismissal
   * - Adds a visual countdown bar or timer to enhance user awareness
   */
  hasCountdown?: boolean;

  /**
   * Whether the notification can be dismissed by swiping, specifically for mobile users
   * - Enhances user experience on touch-enabled devices
   */
  dismissibleBySwipe?: boolean;

  /**
   * Custom class names for additional styling, allowing developers to override or extend styles
   */
  className?: string;

  /**
   * Whether the notification should stack with others vertically, useful when multiple notifications are displayed
   */
  stackable?: boolean;

  /**
   * Accessibility settings for the notification, ensuring compliance with WCAG guidelines
   */
  accessibility?: NotificationAccessibility;

  /**
   * Whether the notification should remain on top of other content (z-index management)
   * - Helps ensure the notification is visible above overlays or modals
   */
  alwaysOnTop?: boolean;

  /**
   * Allows specifying a custom animation for notification appearance and dismissal
   * - Examples: 'fade', 'slide', 'zoom'
   */
  animationType?: 'fade' | 'slide' | 'zoom' | 'none';

  /**
   * Delay before the notification appears (in milliseconds), useful for staggering notifications
   */
  delay?: number;

  /**
   * Width of the notification, allowing customization of its size (e.g., '300px', '50%')
   */
  width?: string;
}

export type NotificationPosition = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'center';

export interface NotificationAction {
  /**
   * The label for the action button, describing the action to be taken
   */
  label: string;

  /**
   * Identifier for the action, used to differentiate between multiple actions
   */
  action: string;

  /**
   * Whether the action button is disabled, preventing user interaction
   */
  disabled?: boolean;

  /**
   * Optional icon to display alongside the action button
   */
  icon?: React.ReactNode;

  /**
   * Type of button variant to match notification style
   */
  variant?: NotificationButtonVariant;
}

export type NotificationButtonVariant = 'accept' | 'reject' | 'neutral';

export interface NotificationAccessibility {
  /**
   * Describes the notification for screen readers, providing context for visually impaired users
   */
  ariaLabel?: string;

  /**
   * Indicates the level of importance for the notification, helping assistive technologies prioritize content
   * - 'polite' for non-urgent information, 'assertive' for critical updates
   */
  ariaLive?: 'polite' | 'assertive';
}
