import React, { useEffect, useRef, useState } from 'react';
import { DialogProps } from './Dialog.types';
import { 
  DialogOverlay, 
  DialogContainer, 
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  CloseButton,
  DialogImage
} from './Dialog.styles';

export const Dialog: React.FC<DialogProps> = ({
  title,
  content,
  isOpen,
  onClose,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  size = 'medium',
  overlay = true,
  className,
  isCritical,
  image,
  onOpen,
  closeOnOverlayClick = true,
  customFooter,
  customHeader,
  draggable = false,
  minWidth = 300,
  minHeight = 200,
  style,
  overlayStyle,
  headerStyle,
  contentStyle,
  footerStyle,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dialogRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen && onOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!draggable || !dialogRef.current) return;
    
    isDragging.current = true;
    const rect = dialogRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;

    setPosition({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y
    });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    if (draggable) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggable]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <DialogOverlay isOpen={isOpen} onClick={handleOverlayClick} style={overlayStyle}>
      <DialogContainer
        ref={dialogRef}
        className={className}
        size={size}
        draggable={draggable}
        minWidth={minWidth}
        minHeight={minHeight}
        isCritical={isCritical}
        style={{
          ...(draggable ? {
            position: 'absolute',
            left: position.x,
            top: position.y,
            cursor: isDragging.current ? 'grabbing' : 'grab'
          } : {}),
          ...style
        }}
      >
        <div onMouseDown={handleMouseDown}>
          {customHeader || (
            <DialogHeader isCritical={isCritical} style={headerStyle}>
              <DialogTitle>{title}</DialogTitle>
              <CloseButton onClick={onClose}>&times;</CloseButton>
            </DialogHeader>
          )}
        </div>

        <DialogContent style={contentStyle}>
          {image && <DialogImage src={image} alt="Dialog" />}
          {content}
        </DialogContent>

        {(primaryAction || secondaryAction || tertiaryAction || customFooter) && (
          <DialogFooter style={footerStyle}>
            {customFooter || (
              <>
                {tertiaryAction && (
                  <DialogButton
                    variant="tertiary"
                    onClick={tertiaryAction.onClick}
                    disabled={tertiaryAction.disabled}
                  >
                    {tertiaryAction.icon}
                    {tertiaryAction.text}
                  </DialogButton>
                )}
                {secondaryAction && (
                  <DialogButton
                    variant="secondary"
                    onClick={secondaryAction.onClick}
                    disabled={secondaryAction.disabled}
                  >
                    {secondaryAction.icon}
                    {secondaryAction.text}
                  </DialogButton>
                )}
                {primaryAction && (
                  <DialogButton
                    variant="primary"
                    onClick={primaryAction.onClick}
                    disabled={primaryAction.disabled}
                  >
                    {primaryAction.icon}
                    {primaryAction.text}
                  </DialogButton>
                )}
              </>
            )}
          </DialogFooter>
        )}
      </DialogContainer>
    </DialogOverlay>
  );
};

export default Dialog;