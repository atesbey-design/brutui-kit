import React, { useEffect, useRef, useState } from 'react';
import {
  NotificationWrapper,
  NotificationHeader,
  NotificationContent,
  NotificationActions,
  NotificationButton,
  NotificationCloseButton,
  CountdownBar,
} from './Notification.styles';
import { NotificationProps } from './Notification.types';
import { X, AlertCircle, CheckCircle2, AlertTriangle, Info, Settings } from 'lucide-react';

const Notification: React.FC<NotificationProps> = ({
  title,
  message,
  variant = 'info',
  isTemporary = true,
  duration = 3,
  onDismiss,
  onAction,
  actions = [],
  position = 'top-right',
  hasCountdown = false,
  dismissibleBySwipe = false,
  className,
  stackable = true,
  accessibility,
  icon,
  alwaysOnTop = false,
  animationType = 'fade',
  delay = 0,
  width,
}) => {
  const notificationRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  const getVariantIcon = () => {
    switch (variant) {
      case 'error':
        return <AlertCircle size={24} />;
      case 'success':
        return <CheckCircle2 size={24} />;
      case 'warning':
        return <AlertTriangle size={24} />;
      case 'info':
        return <Info size={24} />;
      case 'custom':
        return <Settings size={24} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isTemporary) {
      timeoutId = setTimeout(() => {
        handleClose();
      }, (duration + delay) * 1000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isTemporary, duration, delay]);

  useEffect(() => {
    if (dismissibleBySwipe && notificationRef.current) {
      const handleSwipe = (event: TouchEvent) => {
        const touch = event.changedTouches[0];
        if (touch.clientY < notificationRef.current!.getBoundingClientRect().top) {
          handleClose();
        }
      };
      const element = notificationRef.current;
      element.addEventListener('touchend', handleSwipe);
      return () => {
        element.removeEventListener('touchend', handleSwipe);
      };
    }
  }, [dismissibleBySwipe]);

  if (!isVisible) {
    return null;
  }

  return (
    <NotificationWrapper
      ref={notificationRef}
      variant={variant}
      position={position}
      alwaysOnTop={alwaysOnTop}
      animationType={animationType}
      className={className}
      width={width}
      duration={duration}
      title={title}
      message={message}
    >
      <NotificationHeader>
        {icon ? <span>{icon}</span> : <span>{getVariantIcon()}</span>}
        <span style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          width: '100%'
        }}>{title}</span>
        <NotificationCloseButton 
          onClick={handleClose} 
          aria-label={accessibility?.ariaLabel || 'Close notification'}
          aria-live={accessibility?.ariaLive || 'polite'}
        >
          <X size={20} />
        </NotificationCloseButton>
      </NotificationHeader>
      <NotificationContent>{message}</NotificationContent>
      {actions.length > 0 && (
        <NotificationActions>
          {actions.map((action, index) => (
            <NotificationButton
              key={index}
              onClick={() => onAction && onAction(action.action)}
              disabled={action.disabled}
              variant={action.variant}
            >
              {action.icon && <span>{action.icon}</span>}
              {action.label}
            </NotificationButton>
          ))}
        </NotificationActions>
      )}
      {hasCountdown && isTemporary && <CountdownBar duration={duration} />}
    </NotificationWrapper>
  );
};

export default Notification;
