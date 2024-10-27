import React, { useEffect, useRef } from 'react';
import { DropdownProps } from './Dropdown.types';
import {
  DropdownContainer,
  DropdownButton,
  DropdownContent,
  DropdownItem,
  DropdownFooter
} from './Dropdown.styles';

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  kind = 'default',
  size = 'medium',
  disabled = false,
  isOpen = false,
  onToggle,
  className,
  buttonIcon,
  isActive = false,
  closeOnOutsideClick = true,
  maxHeight,
  customFooter,
  style,
  buttonStyle,
  contentStyle,
  footerStyle
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (closeOnOutsideClick) {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && isOpen) {
          onToggle();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, onToggle, closeOnOutsideClick]);

  return (
    <DropdownContainer ref={dropdownRef} className={className} style={style}>
      <DropdownButton
        onClick={() => !disabled && onToggle()}
        disabled={disabled}
        kind={kind}
        size={size}
        isActive={isActive}
        style={buttonStyle}
      >
        {buttonIcon}
        {label}
      </DropdownButton>

      <DropdownContent isOpen={isOpen} maxHeight={maxHeight} style={contentStyle}>
        {items.map((item, index) => (
          <DropdownItem
            key={index}
            onClick={() => !item.disabled && item.onSelect()}
            disabled={item.disabled}
            style={item.style}
          >
            {item.icon}
            {item.text}
          </DropdownItem>
        ))}
        {customFooter && (
          <DropdownFooter style={footerStyle}>
            {customFooter}
          </DropdownFooter>
        )}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;