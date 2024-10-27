import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button<{
  kind?: DropdownProps['kind'];
  size?: DropdownProps['size'];
  disabled?: boolean;
  isActive?: boolean;
}>`
  padding: ${props => {
    switch(props.size) {
      case 'small': return '6px 12px';
      case 'large': return '12px 24px';
      default: return '8px 16px';
    }
  }};
  border: 3px solid #000000;
  background: ${props => {
    switch(props.kind) {
      case 'neutral': return '#E0E0E0';
      case 'success': return '#4CAF50';
      case 'danger': return '#FF4444';
      default: return '#2196F3';
    }
  }};
  color: #000000;
  font-family: 'NeoBrutQa', sans-serif;
  font-size: ${props => props.size === 'large' ? '16px' : '14px'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  box-shadow: 4px 4px 0px #000000;
  transition: transform 0.1s, box-shadow 0.1s;
  display: flex;
  align-items: center;
  gap: 8px;
  transform: ${props => props.isActive ? 'translate(4px, 4px)' : 'none'};

  &:active:not(:disabled) {
    transform: translate(4px, 4px);
    box-shadow: none;
  }

  &:hover:not(:disabled) {
    filter: brightness(110%);
  }
`;

export const DropdownContent = styled.div<{
  isOpen?: boolean;
  maxHeight?: number;
}>`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: #ffffff;
  border: 3px solid #000000;
  box-shadow: 8px 8px 0px #000000;
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 1000;
  max-height: ${props => props.maxHeight ? `${props.maxHeight}px` : '300px'};
  overflow-y: auto;
`;

export const DropdownItem = styled.div<{
  disabled?: boolean;
}>`
  padding: 8px 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #F5F5F5;
  }

  &:active:not(:disabled) {
    background-color: #E0E0E0;
  }
`;

export const DropdownFooter = styled.div`
  padding: 8px 16px;
  border-top: 3px solid #000000;
  background: #ffffff;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
