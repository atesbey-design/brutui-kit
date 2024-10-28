import React, { useEffect, useRef, useState } from 'react';
import { PopoverProps } from './Popover.types';
import { PopoverWrapper, PopoverContent, TriggerWrapper, PopoverCloseButton } from './Popover.styles';
import { X } from 'lucide-react';

const Popover: React.FC<PopoverProps> = ({
  content,
  isOpen: controlledIsOpen,
  triggerElement,
  position = 'auto',
  alignment = 'center',
  onOpen,
  onClose,
  closeOnOutsideClick = true,
  className,
  autoAdjust = true,
  accessibility,
  hasArrow = true,
  delay = 0,
  width,
  height,
  dismissibleByEscape = true,
  animationType = 'fade',
  sticky = false,
  maxHeight,
  triggerInteraction = 'click',
  offset = 8,
  zIndex,
  isNested = false,
  variant,
  bgColor,
  textColor,
  borderColor
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen ?? internalIsOpen;
  
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleTriggerClick = () => {
    setInternalIsOpen(!isOpen);
  };

  const handleClose = () => {
    setInternalIsOpen(false);
    onClose?.();
  };

  useEffect(() => {
    if (isOpen) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [isOpen, onOpen, onClose]);

  useEffect(() => {
    if (dismissibleByEscape) {
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isOpen) {
          setInternalIsOpen(false);
          onClose?.();
        }
      };

      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [dismissibleByEscape, isOpen, onClose]);

  useEffect(() => {
    if (closeOnOutsideClick && isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          popoverRef.current && 
          !popoverRef.current.contains(event.target as Node) &&
          triggerRef.current &&
          !triggerRef.current.contains(event.target as Node)
        ) {
          setInternalIsOpen(false);
          onClose?.();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [closeOnOutsideClick, isOpen, onClose]);

  return (
    <PopoverWrapper>
      <TriggerWrapper ref={triggerRef} onClick={handleTriggerClick}>
        {triggerElement}
      </TriggerWrapper>
      {isOpen && (
        <PopoverContent
          ref={popoverRef}
          className={className}
          role="dialog"
          aria-label={accessibility?.ariaLabel}
          aria-describedby={accessibility?.ariaDescribedBy}
          aria-live={accessibility?.ariaLive}
          position={position}
          width={width}
          height={height}
          maxHeight={maxHeight}
          zIndex={zIndex}
          animationType={animationType}
          variant={variant}
          bgColor={bgColor}
          textColor={textColor}
          borderColor={borderColor}
        >
          <PopoverCloseButton onClick={handleClose} aria-label="Close popover">
            <X size={16} />
          </PopoverCloseButton>
          {content}
        </PopoverContent>
      )}
    </PopoverWrapper>
  );
};

export default Popover;
