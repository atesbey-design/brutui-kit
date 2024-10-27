import styled from 'styled-components';
import { CheckboxState } from './Checkbox.types';

export const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 8px;
  
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledCheckbox = styled.div<{
  state: CheckboxState;
  disabled?: boolean;
}>`
  width: 24px;
  height: 24px;
  border: 3px solid #000000;
  background: ${props => props.state === 'checked' ? '#FF00FF' : '#FFFFFF'};
  position: relative;
  transition: all 0.2s ease;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.8);

  &:hover {
    transform: ${props => props.disabled ? 'none' : 'translate(-2px, -2px)'};
    box-shadow: ${props => props.disabled ? '4px 4px 0 rgba(0, 0, 0, 0.8)' : '6px 6px 0 #00FFFF'};
  }

  &:active {
    transform: ${props => props.disabled ? 'none' : 'translate(2px, 2px)'};
    box-shadow: ${props => props.disabled ? '4px 4px 0 rgba(0, 0, 0, 0.8)' : '2px 2px 0 #FFFF00'};
  }

  ${props => props.state === 'checked' && `
    &:after {
      content: '';
      position: absolute;
      left: 6px;
      top: 2px;
      width: 6px;
      height: 12px;
      border: solid #FFFFFF;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  `}

  ${props => props.state === 'indeterminate' && `
    &:after {
      content: '';
      position: absolute;
      left: 4px;
      top: 8px;
      width: 12px;
      height: 2px;
      background: #FF00FF;
    }
  `}
`;

export const CheckboxLabel = styled.span<{ required?: boolean }>`
  font-family: 'Space Mono', monospace;
  font-size: 16px;
  font-weight: 500;
  color: #000000;

  ${props => props.required && `
    &:after {
      content: '*';
      color: #FF0000;
      margin-left: 4px;
    }
  `}
`;
